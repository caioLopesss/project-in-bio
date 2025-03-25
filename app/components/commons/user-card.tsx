import { Instagram, Github, Linkedin, Plus } from "lucide-react";
import Button from "../ui/button";

export default function UserCard() {
  const icons = [Instagram, Github, Linkedin, Plus];
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5  bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src="/profileCaio.png"
          alt="Caio Dev"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Caio Dev
          </h3>
        </div>
        <p className="opacity-40"> Eu faço produtos para a internet</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map((Icon, index) => (
            <button
              key={index}
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
            >
              <Icon />
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button className="w-full">Template Saas - Compre Agora</Button>
            <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
