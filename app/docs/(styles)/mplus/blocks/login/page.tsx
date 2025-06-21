import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import LoginPage from "@/registry/mplus/blocks/login/page";

export default function Login() {
  return (
    <>
      <ContentHeader>登入</ContentHeader>
      <RegistryBlock author="作者: EricTsai" blockName="login">
        <LoginPage />
      </RegistryBlock>
    </>
  );
}
