import { BentoDemo } from "@/components/bento";

import { helix } from 'ldrs'
import 'ldrs/helix'
import 'ldrs/grid'


// Default values shown

export default function Work() {
    // helix.register()
    return (
        <div className="container mx-auto pt-10">
            Hello world
            <div>
                <l-helix
                size="30"
                speed="5"
                color="blue" 
                ></l-helix>
                <l-grid
                size="30"
                speed="5"
                color="blue" 
                ></l-grid> 
            </div>
        </div>
    );
}
