import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import Sidebar from "@/registry/mplus/blocks/sidebar/page";

export default function SidebarPage() {
  return (
    <>
      <ContentHeader title="Sidebar 元件" />
      <RegistryBlock title="M+ 側邊欄" blockName="sidebar">
        <Sidebar />
      </RegistryBlock>
    </>
  );
}
