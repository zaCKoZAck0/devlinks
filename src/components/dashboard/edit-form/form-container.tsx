export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 space-y-3 bg-background rounded-md">{children}</div>
  );
}
