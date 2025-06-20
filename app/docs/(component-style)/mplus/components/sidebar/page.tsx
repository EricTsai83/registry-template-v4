import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import Sidebar from "@/registry/mplus/blocks/sidebar/page";

export default function SidebarPage() {
  return (
    <>
      <ContentHeader>側邊欄</ContentHeader>
      <RegistryBlock author="作者: EricTsai" blockName="sidebar">
        <Sidebar />
      </RegistryBlock>
    </>
  );
}
