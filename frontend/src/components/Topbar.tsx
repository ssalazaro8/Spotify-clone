import { cn } from "@/lib/utils";
import { SignedOut, UserButton, SignedIn, SignOutButton } from '@clerk/clerk-react';
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
    const isAdmin = false; // Replace with actual logic to determine if the user is an admin
  return (
    <div className = "flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
        
        <div className="gap-2 items-center">
            Spotify
        </div>
        <div className='flex items-center gap-4'>
				{isAdmin && (
					<Link to={"/admin"} className={cn(buttonVariants({ variant: "outline" }))}>
						<LayoutDashboardIcon className='size-4  mr-2' />
						Admin Dashboard
					</Link>
				)}

				<SignedIn>
					<SignOutButton />
				</SignedIn>

				<SignedOut>
					<SignInOAuthButtons />
				</SignedOut>

				<UserButton />
			</div>
        
    </div>
  )
}

export default Topbar