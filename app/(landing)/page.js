import { Button } from "@/app/_components/ui/shadcn/button";
import { LoginButton } from "../_components/auth/login-button";

const page = async () => {
  return (
    <div>
      <h1>Title</h1>
      <LoginButton>
        <Button>شروع</Button>
      </LoginButton>
    </div>
  );
};

export default page;
