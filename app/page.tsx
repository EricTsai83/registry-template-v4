import { OpenInV0Button } from "@/components/open-in-v0-button";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
// For M Plus
import ChatWindow from "@/registry/mplus/blocks/chat-window/page";
import Header from "@/registry/mplus/blocks/header/page";
import Login from "@/registry/mplus/blocks/login/page";
import ChatList from "@/registry/mplus/blocks/sidebar/page";

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
    <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-muted-foreground text-sm sm:pl-3">{title}</h2>
        <OpenInV0Button name={blockName} className="w-fit" />
      </div>
      <div className="relative flex min-h-[400px] items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
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
