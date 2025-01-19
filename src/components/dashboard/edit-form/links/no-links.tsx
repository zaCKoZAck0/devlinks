import { NoLinkPlaceholder } from "~/components/icon/no-link-placeholder";
import { FormContainer } from "../form-container";

export function NoLinks() {
    return (
      <FormContainer>
        <div className="flex flex-col gap-10 w-full items-center justify-center">
            <NoLinkPlaceholder />
            <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold text-foreground">{"Let’s get you started"}</h2>
                <p className="max-w-[448px]"> Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
            </div>
            </div>
        </FormContainer>
    )
}