export function DashboardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="p-6 pt-0 flex-grow flex gap-6">{children}</main>;
}
