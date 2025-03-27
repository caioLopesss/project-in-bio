import { PRICE, TRIAL_DAYS, VITALICE } from "@/app/lib/utils";
import Button from "../ui/button";

export default function Pricing() {
  return (
    <div className="my-[150px] flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white">
          Um valor acessível para todos
        </h3>
        <p className="text-content-body text-xl text-center">
          Junte-se a comunidade de criadores Profissionais que ja estâo elevando
          sua <br />
          presença online. Teste gratuitamente por{" "}
          <strong className="text-accent-pink">{TRIAL_DAYS} dias</strong>, sem
          compromisso!!!
        </p>
      </div>
      <div className="flex items-end gap-9">
        <div className="w-[304px] p-8 flex flex-col gap-7 rounded-2xl border border-[#1e1e1e]">
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl">Mensal</span>
            <span className="text-content-headline text-2xl">Apenas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[48px]">{PRICE}</span>
            <span className="text-content-headline text-2xl">/mês</span>
          </div>
          <Button variant="secondary"> Assinar </Button>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-t-2xl w-[304px] bg-[linear-gradient(90deg,#4b2dbb_0%,#b5446b_100%)]">
            <span className="uppercase text-xs font-bold p-2">Recomendado</span>
          </div>
          <div className="p-[1.6px] bg-[linear-gradient(90deg,#4b2dbb_0%,#b5446b_100%)] rounded-b-2xl">
            <div className="w-full bg-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Vitalício</span>
                <span className="text-body">Economize com</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-[48px]">
                  {VITALICE}
                </span>
              </div>
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
