import { OpenInV0Button } from "./open-in-v0-button";

export function RegistryBlock({
  title,
  blockName,
  children,
}: {
  title: string;
  blockName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
        <OpenInV0Button name={blockName} className="w-fit" />
      </div>
      <div className="flex items-center justify-center min-h-[400px] relative">
        {children}
      </div>
    </div>
  );
}
