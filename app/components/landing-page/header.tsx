import { auth } from "@/app/lib/auth";
import Button from "../ui/button";
import ManageAuth from "@/app/actions/manage-auth";

export default async function Header() {
  const session = await auth(); // Chamar a função corretamente

  console.log(session);

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>

      <div className="flex items-center gap-4 ml-auto">
        {session && <Button>Minha Página</Button>}

        <form action={ManageAuth}>
          <Button>{session ? "Sair" : "Login"}</Button>
        </form>
      </div>
    </div>
  );
}
