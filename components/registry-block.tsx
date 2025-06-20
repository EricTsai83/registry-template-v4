import { OpenInV0Button } from "./open-in-v0-button";

export function RegistryBlock({
  author,
  blockName,
  children,
}: {
  author: string;
  blockName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-muted-foreground text-sm sm:pl-3">{author}</h2>
        <OpenInV0Button name={blockName} className="w-fit" />
      </div>
      <div className="relative flex min-h-[400px] items-center justify-center">
        {children}
      </div>
    </div>
  );
}
