import { auth } from "@/app/lib/auth";
import Button from "../ui/button";

export default async function Header() {
  const session = await auth;

  console.log(session);
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <h3 className="Text-white text-2xl font-bold ">ProjectInBio</h3>
      <div></div>

      <div className="flex items-center gap-4 ml-auto">
        {" "}
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
}
