import { ArrowRight, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div>
      <section className="flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat">
        <main className="flex flex-col items-center max-md:px-2">
          <a
            href="/"
            className="mt-32 flex items-center gap-2 border border-primary rounded-full p-1 pr-3 text-sm font-medium text-primary bg-primary/20"
          >
            <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
              NEW
            </span>
            <p className="flex items-center gap-1">
              <span>Try 7 days free trial option </span>
              <ChevronRight />
            </p>
          </a>

          <h1 className="text-center text-5xl leading-[68px] md:text-5xl md:leading-20 font-semibold max-w-4xl text-slate-900">
            Gere seu modelo de e-mail utilizando nosso gerador de templates com
            IA.
          </h1>
          <p className="text-center text-base text-slate-700 max-w-lg mt-2">
            Nossa plataforma ajuda você a criar, testar e entregar mais
            rapidamente, para que você possa concentrar-se no que importa.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button size="lg" variant="outline">
              Get started
              <ArrowRight />
            </Button>
            <Button size="lg">Pricing</Button>
          </div>

          <Image
            src="/bg-hero.png"
            className="w-full rounded-[15px] max-w-4xl mt-16"
            alt="hero section showcase"
            width={100}
            height={50}
          />
        </main>
      </section>
    </div>
  );
}

export default Hero;
