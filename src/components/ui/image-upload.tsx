import React, { useCallback } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import NextImage from "next/image";
import { ImageIcon } from "../icon/form/image-icon";
import { toast } from "sonner";
import { uploadImage } from "~/actions/image/upload";
import { useAction } from "~/hooks/use-action";
import { cn } from "~/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  error?: string; // Error message prop
  icon?: React.ReactNode; // Icon prop
}

export const ImageUpload = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, id, onChange, value, ...props }, ref) => {
    const { execute } = useAction(uploadImage, {
      onSuccess: (data) => {
        onChange?.({
          target: { value: data },
        } as unknown as React.ChangeEvent<HTMLInputElement>);
        toast.success("Image uploaded successfully.");
      },
      onError: (error) => {
        toast.error("Failed to upload image.");
        console.error(error);
      },
    });

    const onDrop = useCallback(
      async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        // Handle accepted files
        if (acceptedFiles.length > 0) {
          const file = acceptedFiles[0];

          // Validate dimensions
          const img = new Image();
          img.src = URL.createObjectURL(file);
          img.onload = () => {
            if (img.width > 1024 || img.height > 1024) {
              toast.error("Image dimensions must be below 1024x1024 pixels.");
              return;
            }
          };
        }

        // Handle rejected files
        if (fileRejections.length > 0) {
          const rejection = fileRejections[0];
          if (
            rejection.errors.some((err) => err.code === "file-invalid-type")
          ) {
            toast.error("Only PNG or JPG files are allowed.");
          } else {
            toast.error("File rejected due to other reasons.");
          }
          return;
        }

        toast.promise(execute({ image: acceptedFiles[0] }), {
          loading: "Uploading image...",
        });
      },
      [execute],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] },
      maxFiles: 1,
    });

    return (
      <div
        className="flex flex-col items-center cursor-pointer"
        title="upload image"
      >
        <div
          {...getRootProps()}
          className={cn(
            "flex items-center justify-center w-48 h-48 rounded-md text-lg font-semibold transition-all",
            isDragActive
              ? "bg-secondary-hover text-primary-foreground"
              : "bg-secondary text-primary hover:bg-secondary-hover/50",
            className,
          )}
        >
          <input id={id} ref={ref} {...getInputProps()} {...props} />
          {value && !isDragActive ? (
            <NextImage
              src={value as string}
              width={250}
              height={250}
              alt="Preview"
              className="w-full h-full object-cover rounded-md object-center"
            />
          ) : (
            <>
              {isDragActive ? (
                <p>Drop Here</p>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <ImageIcon />
                  <p>{placeholder}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  },
);

ImageUpload.displayName = "ImageUpload";
