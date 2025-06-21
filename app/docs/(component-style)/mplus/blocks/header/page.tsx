import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import HeaderBlock from "@/registry/mplus/blocks/header/page";

export default function Header() {
  return (
    <>
      <ContentHeader>頁首</ContentHeader>
      <RegistryBlock author="作者: EricTsai" blockName="header">
        <HeaderBlock />
      </RegistryBlock>
    </>
  );
}
