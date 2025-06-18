import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import { ChatWindowContent } from "@/registry/m-plus/blocks/chat-window/components/chat-window-content";

export default function ChatWindowPage() {
  return (
    <div className="flex flex-col gap-4 py-6">
      {/* content header */}
      <ContentHeader title="Chat Window" />
      {/* content */}
      <div className="container mx-auto px-8">
        <RegistryBlock title="Chat Window" blockName="chat-window">
          <div className="w-full max-w-3xl">
            <ChatWindowContent />
          </div>
        </RegistryBlock>
      </div>
    </div>
  );
}
