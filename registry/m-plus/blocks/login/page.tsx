import { LoginForm } from "@/registry/m-plus/blocks/login/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-xl flex-col gap-6 ">
        <LoginForm />
      </div>
    </div>
  );
}
