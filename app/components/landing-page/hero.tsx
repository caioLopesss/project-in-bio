import UserCard from "../commons/user-card";
import Button from "../ui/button";
import TextInput from "../ui/text-input";

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o enganjamento com Analytics de cliques.
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectInBio.com</span>
          <TextInput placeholder="Seu Link" />
          <Button>Criar Agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4b2dbb,transparent_48%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[45%]"></div>
          <div className="absolute top-[20%] -left-[45%] -z-10"></div>
          <div className="absolute top-[5%] -left-[55%] -z-10"></div>
        </div>
      </div>
    </div>
  );
}
