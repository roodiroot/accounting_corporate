import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const StapAction = () => {
  return (
    <div className="relative w-full max-w-[380px] mx-auto aspect-[1/1.18] rounded-5xl p-8 flex flex-col overflow-hidden group cursor-pointer shadow-lg md:mx-0">
      <Image
        alt="bg-step_4"
        width={400}
        height={400}
        src="/images/steps/bg.png"
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex-1 flex justify-between">
        <div className="text-[80px] text-white font-bold">4</div>
        <Button
          className="bg-white group-hover:bg-white/70"
          size="icon"
          variant="icon"
        >
          <Icons.link className="stroke-accent" />
        </Button>
      </div>
      <h4 className="text-4xl text-white">
        Начинаем работать
        <Icons.link className="ml-4 stroke-white inline" />
      </h4>
    </div>
  );
};

export default StapAction;
