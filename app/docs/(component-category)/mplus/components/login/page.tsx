import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import LoginPage from "@/registry/mplus/blocks/login/page";

export default function Login() {
  return (
    <>
      <ContentHeader title="Login 區塊" />
      <RegistryBlock title="M+ 登入區塊" blockName="login">
        <LoginPage />
      </RegistryBlock>
    </>
  );
}
