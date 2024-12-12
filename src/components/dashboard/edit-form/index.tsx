import { ProfileForm } from "./profile";
import { LinksForm } from "./links";
import { SaveButton } from "./save-button";

export function EditForm() {
  return (
    <div className="bg-card text-card-foreground rounded-md h-full flex-grow relative flex flex-col justify-between">
      {/* Conditionally rendered (only one) */}
      <ProfileForm />
      <LinksForm />

      {/* Save button */}
      <SaveButton />
    </div>
  );
}
