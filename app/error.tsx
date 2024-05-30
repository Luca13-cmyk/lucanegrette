"use client";
import MagicButton from "@/components/ui/MagicButton";
import { useOrigin } from "@/hooks/use-origin";
import { IoReload } from "react-icons/io5";

export default function Error() {
  const origin = useOrigin();

  return (
    <div className="w-[90vw] overflow-hidden h-screen flex flex-col justify-center items-center text-white mx-2 space-y-8">
      <p className="text-center text-sm max-w-[80vw]">
        Parece que ocorreu um erro, talvez seu aparelho não consiga renderizar o
        site. <br /> Tente uma{" "}
        <span className="text-purple">versão mais simples</span>{" "}
      </p>
      <a href={`${origin}/?opt=true`}>
        <MagicButton icon={<IoReload />} title="Aqui" position="right" />
      </a>
    </div>
  );
}
