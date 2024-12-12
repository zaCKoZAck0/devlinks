type RootContainerProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function RootContainer({
  children,
  title,
  description,
}: RootContainerProps) {
  return (
    <div className="md:p-10 p-6 space-y-10 overflow-y-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
