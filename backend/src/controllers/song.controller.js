import {Song} from '../models/song.model.js';

export const getAllSongs = async (req, res, next) => {
    try {
        //-1 is = descending order, 1 is ascending order
        const songs = await Song.find().sort({ createdAt: -1 });
        res.json(songs);   

    } catch (error) {
        next(error);
    }
}

export const getSFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 6 } // Randomly select 10 songs
            },
            {
                $project: {
                   _id: 1,
                   title: 1,
                   artist: 1,
                   imageUrl: 1,
                   audioUrl: 1,
                },
            },
        ])

        res.json(songs);

    } catch (error) {
        next(error);
    }
}

export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 4 } // Randomly select 10 songs
            },
            {
                $project: {
                   _id: 1,
                   title: 1,
                   artist: 1,
                   imageUrl: 1,
                   audioUrl: 1,
                },
            },
        ])

        res.json(songs);

    } catch (error) {
        next(error);
    }
}

export const getSTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 4 } // Randomly select 10 songs
            },
            {
                $project: {
                   _id: 1,
                   title: 1,
                   artist: 1,
                   imageUrl: 1,
                   audioUrl: 1,
                },
            },
        ])

        res.json(songs);

    } catch (error) {
        next(error);
    }
}