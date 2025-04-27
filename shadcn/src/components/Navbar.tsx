import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Moon} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      collapseButton
      {/* Right */}
      <div className="flex items-center gap-4">
        <a href="">Dashboard</a>
        <Moon />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </Avatar>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
