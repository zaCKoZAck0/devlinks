"use client";
import { useSelector } from "react-redux";
import { RootState } from "~/state/store";
import { RootContainer } from "../root-container";
import { ImageInput, TextInput } from "./input";
import { FormContainer } from "../form-container";

export function ProfileForm() {
  const dashboardView = useSelector(
    (state: RootState) => state.dasboardView.view,
  );
  if (dashboardView !== "profile") return null;
  return (
    <RootContainer
      title="Profile Details"
      description="Add your details to create a personal touch to your profile."
    >
      <div className="space-y-6">
        <FormContainer>
          <ImageInput
            item="profilePicture"
            label="Profile picture"
            placeholder="+ Upload Image"
            message="Image must be below 1024x1024px. Use PNG or JPG format."
          />
        </FormContainer>
        <FormContainer>
          <TextInput
            item="firstName"
            label="First name"
            placeholder="e.g. John"
            required
          />
          <TextInput
            item="lastName"
            label="Last name"
            placeholder="e.g. Appleseed"
            required
          />
          <TextInput
            item="email"
            label="Email"
            placeholder="e.g. email@example.com"
          />
        </FormContainer>
      </div>
    </RootContainer>
  );
}
