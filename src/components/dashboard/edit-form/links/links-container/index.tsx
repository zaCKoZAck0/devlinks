import { LinkCard } from "./link-card";

export function LinksContainer() {
    return (
        <div className="space-y-6">
            {[1, 2, 3].map((linkId) => {
                return <LinkCard key={linkId} linkId={linkId} />;                   
            })}
        </div>
    );
}