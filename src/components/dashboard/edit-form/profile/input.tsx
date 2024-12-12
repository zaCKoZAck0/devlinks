import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageUpload } from "~/components/ui/image-upload";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { setField } from "~/state/editor-form/editor-form-slice";
import { AppDispatch, RootState } from "~/state/store";

type InputFieldProps = {
  required?: boolean;
  label?: string;
  placeholder?: string;
  item: keyof RootState["editorForm"]["data"];
  message?: string;
};

type FormFieldProps = InputFieldProps & {
  children: (args: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldValue: string;
  }) => React.ReactNode;
};

function FormField({
  item,
  label,
  required,
  children,
  message,
}: FormFieldProps) {
  const fieldValue = useSelector(
    (state: RootState) => state.editorForm.data[item],
  ) as string;

  const dispatch = useDispatch<AppDispatch>();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setField({ key: item, value: e.target.value }));
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
      <Label
        htmlFor={item}
        className="flex-shrink-0 md:text-lg text-sm md:min-w-60 font-normal"
      >
        {label}
        {required && <span>*</span>}
      </Label>
      {children({ handleChange, fieldValue })}
      {message && (
        <p className="text-sm font-normal p-3 md:max-w-64">{message}</p>
      )}
    </div>
  );
}

export function ImageInput({
  item,
  label,
  required,
  placeholder,
  message,
}: InputFieldProps) {
  return (
    <FormField
      item={item}
      label={label}
      required={required}
      placeholder={placeholder}
      message={message}
    >
      {({ handleChange, fieldValue }) => (
        <ImageUpload
          id={item}
          placeholder={placeholder}
          value={fieldValue}
          onChange={handleChange}
        />
      )}
    </FormField>
  );
}

export function TextInput({
  item,
  label,
  required,
  placeholder,
}: InputFieldProps) {
  return (
    <FormField
      item={item}
      label={label}
      required={required}
      placeholder={placeholder}
    >
      {({ handleChange, fieldValue }) => (
        <Input
          id={item}
          placeholder={placeholder}
          onChange={handleChange}
          value={fieldValue as string}
        />
      )}
    </FormField>
  );
}
