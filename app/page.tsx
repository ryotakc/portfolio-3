import { BentoDemo } from "@/components/bento";
import HyperText from "@/components/magicui/hyper-text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto pt-10">
            <div className="container">
        <HyperText
        className="text-4xl font-bold text-black dark:text-white"
        text="Hello World!"
        />
      </div>
      <div>
        <BentoDemo />
      </div>
      
    </div>
  );
}
