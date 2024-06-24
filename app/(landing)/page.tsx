import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Link href="">
          <Button>Login</Button>
        </Link>
        <Link href="">
          <Button>Cadastrar</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
