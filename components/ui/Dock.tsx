import { dockLinks } from "@/data";

import { AnimatedTooltip } from "./AnimatedTooltip";

const Dock = () => {
  return (
    <div className="fixed z-20 left-2 top-[50%] -translate-y-[50%] h-[50vh] w-[80px] bg-black/10 border border-white/[0.1] p-2 rounded-lg hidden md:flex flex-col justify-around items-center">
      <AnimatedTooltip items={dockLinks} />
    </div>
  );
};

export default Dock;
