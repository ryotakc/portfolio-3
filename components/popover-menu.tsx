import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { CodeXml, Github, Home, Images, Instagram, Mail, NotebookTabs, Twitter } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";


export default function PopoverMenu() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Image src="/profile.webp" height={32} width={32} alt="Profile" className="size-7 rounded-md"/>
            </PopoverTrigger>
            <PopoverContent className="w-auto" >
                <div className="container pt-5 pb-5">
                    <div className="flex items-center pb-5">
                        <div className="">
                            <Image src="/profile.webp" height={32} width={32} alt="Profile" className="size-24 rounded-md"/>
                        </div>
                        <div className="ml-8">
                            <div>
                                <h1>Ryota Kato</h1>
                            </div>
                            <div>
                                <p>@ryotakc</p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <Link href="https://x.com/leo_rkc">
                                    <SiX />
                                </Link>
                                <Link href="https://github.com/ryotakc">
                                    <SiGithub />
                                </Link>
                                <Link href="https://instagram.com/leok_can">
                                    <SiInstagram color="#E4405F"/>
                                </Link>
                                <Link href="https://www.linkedin.com/in/leo-rkc">
                                    <SiLinkedin color="#0A66C2"/>
                                </Link>
                                <Link href="mailto:rka147@sfu.ca" type="email">
                                    <Mail />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Separator className="w-full" />
                    <div className="pt-5">
                        <div className="flex gap-3">
                            <div>
                                <Button variant="ghost" className="flex gap-1">
                                    <Home />
                                    <p>Home</p>
                                </Button>
                                <Button variant="ghost" className="flex gap-1">
                                    <CodeXml />
                                    <p>Work</p>
                                </Button>
                            </div>
                            <div>
                                <Button variant="ghost" className="flex gap-1">
                                    <Images />
                                    <p>Photography</p>
                                </Button>
                                <Button variant="ghost" className="flex gap-1">
                                    <NotebookTabs  />
                                    <p>Contact</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </PopoverContent>
        </Popover>
    )
}
