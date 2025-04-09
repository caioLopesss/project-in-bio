"use client";

import TextInput from "@/app/components/ui/text-input";
import Button from "@/app/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { sanitizeLink } from "@/app/lib/utils";
import { verifyLink } from "@/app/actions/verify-link";
import { createLink } from "@/app/actions/create-link";
import { useRouter } from "next/navigation";

export default function CreateLinkForm() {
  const router = useRouter();

  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value));
    setError("");
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (link.length === 0) return setError("Escolha um link primeiro");

    const isLinkTaken = await verifyLink(link);
    if (isLinkTaken) return setError("Desculpe o link já esta em uso.");

    const isLinkCreated = await createLink(link);
    if (!isLinkCreated)
      return setError("Erro ao criar perfil. Tente novamente");

    router.push(`/${link}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span className="text-white">projectInBio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  );
}
