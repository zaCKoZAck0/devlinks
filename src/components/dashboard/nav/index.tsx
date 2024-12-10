import { FullLogo } from "~/components/icon/logo/full-logo";
import { Button } from "~/components/ui/button";
import { NavLink } from "./nav-link";
import { ProfileIcon, LinkIcon, PreviewIcon } from "~/components/icon";
import { Logo } from "~/components/icon/logo";

export function Navbar() {
  return (
    <nav role="navigation" className="p-6">
      <div className="rounded-md bg-card w-full flex justify-between items-center p-4">
        <FullLogo className="hidden md:flex" />
        <Logo className="md:hidden text-primary" />

        <div className="flex items-center gap-2">
          <NavLink value="links">
            <LinkIcon className="h-5 w-5" />
            <span className="hidden md:inline">Links</span>
          </NavLink>
          <NavLink value="profile">
            <ProfileIcon className="h-5 w-5" />
            <span className="hidden md:inline">Profile</span>
          </NavLink>
        </div>

        <Button variant="outline" className="text-lg">
          <span className="hidden md:inline">Preview</span>
          <PreviewIcon className="h-5 w-5 md:hidden" />
        </Button>
      </div>
    </nav>
  );
}
