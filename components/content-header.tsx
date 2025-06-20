export function ContentHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 px-8">
      <h1 className="w-full pr-3.5 text-center text-3xl font-bold">
        {children}
      </h1>
    </header>
  );
}
