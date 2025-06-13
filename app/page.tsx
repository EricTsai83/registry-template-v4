import { OpenInV0Button } from "@/components/open-in-v0-button";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
// For M Plus
import Login from "@/registry/m-plus/blocks/login/page";
import ChatList from "@/registry/m-plus/blocks/sidebar/page";
import ChatWindow from "@/registry/m-plus/blocks/chat-window/page";
import Header from "@/registry/m-plus/blocks/header/page";

// 新增 RegistryBlock 組件
function RegistryBlock({
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

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <RegistryBlock title="A login block." blockName="login">
          <Login />
        </RegistryBlock>

        <RegistryBlock title="A chat list block." blockName="sidebar">
          <ChatList />
        </RegistryBlock>

        <RegistryBlock title="A chat window block." blockName="chat-window">
          <ChatWindow />
        </RegistryBlock>

        <RegistryBlock title="A header block." blockName="header">
          <Header />
        </RegistryBlock>

        <RegistryBlock
          title="A simple hello world component"
          blockName="hello-world"
        >
          <HelloWorld />
        </RegistryBlock>

        <RegistryBlock
          title="A contact form with Zod validation."
          blockName="example-form"
        >
          <ExampleForm />
        </RegistryBlock>

        <RegistryBlock
          title="A complex component showing hooks, libs and components."
          blockName="complex-component"
        >
          <PokemonPage />
        </RegistryBlock>

        <RegistryBlock
          title="A login form with a CSS file."
          blockName="example-with-css"
        >
          <ExampleCard />
        </RegistryBlock>
      </main>
    </div>
  );
}
