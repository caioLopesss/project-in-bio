export default function ProjectCard() {
  return (
    <div className="w-[430px] h-[132px] flex gap-5 bg-secondary p-3 rounded-[20px] border border-transparent hover:border-bordersecondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img
          src="projeto.webp"
          alt="Projeto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 cliques{" "}
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">Projeto 1</span>
          <span className="text-body text-sm">
            Descriçâo super detalhada do que o projeto faz
          </span>
        </div>
      </div>
    </div>
  );
}
