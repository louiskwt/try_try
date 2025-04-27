import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {LogOut, Moon, Settings, User} from "lucide-react";

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
                <DropdownMenuItem>
                  <User className="h-[1.2rem] w-[1.2-rem] mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-[1.2rem] w-[1.2-rem] mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="h-[1.2rem] w-[1.2-rem] mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </Avatar>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
