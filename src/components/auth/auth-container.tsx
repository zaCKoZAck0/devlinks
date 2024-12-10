import { FullLogo } from "~/components/icon/logo/full-logo";

export function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground gap-12">
      <FullLogo />
      {children}
    </div>
  );
}
