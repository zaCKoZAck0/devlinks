import { Button } from "~/components/ui/button";
import { ProfileForm } from "./profile";
import { LinksForm } from "./links";

export function EditForm() {
  return (
    <div className="bg-card text-card-foreground rounded-md h-full flex-grow relative flex flex-col justify-between">
      {/* Conditionally rendered */}
      <ProfileForm />
      <LinksForm />

      {/* Save button */}
      <div className="border-t-2 bottom-0 bg-card/70 backdrop-blur-md  sticky w-full px-9 py-6 flex justify-end">
        <Button className="w-full md:w-auto">Save</Button>
      </div>
    </div>
  );
}
