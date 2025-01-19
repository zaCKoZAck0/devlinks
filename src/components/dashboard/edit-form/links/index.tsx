"use client";
import { useSelector } from "react-redux";
import { RootState } from "~/state/store";
import { RootContainer } from "../root-container";
import { AddLinkButton } from "./add-link-button";
import { LinksContainer } from "./links-container";

export function LinksForm() {
  const dashboardView = useSelector(
    (state: RootState) => state.dasboardView.view,
  );
  if (dashboardView !== "links") return null;
  return (
    <RootContainer
      title="Customize your links"
      description="Add/edit/remove links below and then share all your profiles with the world!"
    >
      <div className="space-y-6">
        <AddLinkButton />
      {/* <NoLinks /> */}
        <LinksContainer />
      </div>
    </RootContainer>
  );
}
