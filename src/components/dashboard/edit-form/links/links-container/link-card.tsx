import { DragLink } from "~/components/icon/drag-link-icon";
import { FormContainer } from "../../form-container";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { LinkIcon } from "~/components/icon";

interface LinkCardProps {
    linkId?: number;
}

export function LinkCard({ }: LinkCardProps) {
    return (
        <FormContainer>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Button variant='link' size='icon' className="cursor-move"><DragLink /></Button>
                        <span className="font-bold">{`Link #${1}`}</span>
                        </div>
                        <Button variant='link' size='sm' className="font-normal text-sm text-card-foreground hover:no-underline">Remove</Button>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="link" className="text-xs h-auto font-normal">Link</Label>
                        <Input icon={LinkIcon({ className: "size-4" })} placeholder="e.g. https://www.github.com/johnappleseed" />
                    </div>
                </div>
            </FormContainer>
    )
}