import { BentoDemo } from "@/components/bento";

import { helix } from 'ldrs'
import 'ldrs/helix'
import 'ldrs/grid'
import HyperText from "@/components/magicui/hyper-text";


// Default values shown

export default function Contact() {
    // helix.register()
    return (
        <div className="container mx-auto pt-10">
            <l-helix
                size="30"
                speed="5"
                color="black" 
            ></l-helix>
            <div className="container">
        <HyperText
        className="text-4xl font-bold text-black dark:text-white"
        text="Hello World!"
        />
      </div>
        </div>
    );
}
