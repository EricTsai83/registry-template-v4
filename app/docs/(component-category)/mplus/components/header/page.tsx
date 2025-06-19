import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import HeaderBlock from "@/registry/mplus/blocks/header/page";

export default function Header() {
  return (
    <>
      <ContentHeader title="Header 元件" />
      <RegistryBlock title="M+ 頁首區塊" blockName="header">
        <HeaderBlock />
      </RegistryBlock>
    </>
  );
}
