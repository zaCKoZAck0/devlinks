import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";
import { formSchema } from "./form-schema";

interface Link {
  platform: string;
  url: string;
}

interface EditorFormState {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
    links: Link[];
  };
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
    links: { platform: string; url: string }[];
  };
}

const initialState: EditorFormState = {
  data: {
    firstName: "",
    lastName: "",
    profilePicture: "",
    email: "",
    links: [],
  },
  errors: {
    firstName: "",
    lastName: "",
    profilePicture: "",
    email: "",
    links: [],
  },
};

function validate(state: EditorFormState, key?: keyof EditorFormState["data"]) {
  state.errors = initialState.errors;

  try {
    if (key) {
      formSchema
        .pick({ [key]: true } as Record<keyof EditorFormState["data"], true>)
        .parse({
          [key]: state.data[key],
        });
    } else {
      formSchema.parse(state.data);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((error) => {
        const path = error.path;
        const key = path[0] as keyof EditorFormState["errors"];

        if (key === "links" && Array.isArray(state.data.links)) {
          const index = path[1] as number;
          const field = path[2] as keyof Link;

          if (typeof index === "number" && field) {
            state.errors.links[index] = {
              ...state.errors.links[index],
              [field]: error.message,
            };
          }
        } else {
          (state.errors[key] as string) = error.message;
        }
      });
    } else throw error;
  }
}

const editorFormSlice = createSlice({
  name: "editorForm",
  initialState,
  reducers: {
    setField(
      state,
      action: PayloadAction<{
        key: keyof EditorFormState["data"];
        value: string | Link[];
      }>,
    ) {
      const { key, value } = action.payload;

      if (key === "links") {
        if (Array.isArray(value)) {
          state.data.links = value as Link[];
        } else {
          throw new Error("Invalid value type for links");
        }
      } else {
        state.data[key] = value as string;
      }

      validate(state, key);
    },
    addLink(state, action: PayloadAction<string>) {
      state.data.links.push({ platform: action.payload, url: "" });
      validate(state, "links");
    },
    updateLinkField(
      state,
      action: PayloadAction<{ index: number; key: keyof Link; value: string }>,
    ) {
      const { index, key, value } = action.payload;
      if (state.data.links[index]) {
        state.data.links[index][key] = value;
        validate(state, "links");
      }
    },
    removeLink(state, action: PayloadAction<number>) {
      state.data.links.splice(action.payload, 1);
      validate(state, "links");
    },
  },
});

export const { setField, addLink, updateLinkField, removeLink } =
  editorFormSlice.actions;

export default editorFormSlice.reducer;
