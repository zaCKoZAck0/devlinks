"use client";
import { useSelector } from "react-redux";
import { RootState } from "~/state/store";
import { RootContainer } from "../root-container";

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
      <div className="p-6">hello from LinksForm</div>
    </RootContainer>
  );
}
