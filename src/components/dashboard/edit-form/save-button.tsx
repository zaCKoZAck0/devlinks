import { Button } from "~/components/ui/button";

export function SaveButton() {
  return (
    <div className="border-t-2 bottom-0 bg-card/70 backdrop-blur-md  sticky w-full px-9 py-6 flex justify-end">
      <Button className="w-full md:w-auto">Save</Button>
    </div>
  );
}
