import Image from "next/image";

import SocialLink from "./social-link";
import { SocialLinks } from "../data/social-links";

function Footer() {
    return (
        <>
            <footer className="px-6 py-8 flex flex-col space-y-6 bg-gray-200">
                <div className="flex justify-evenly">
                    {SocialLinks.map((link, i) => (
                        <SocialLink key={i} url={link.url} icon={link.icon} />
                    ))}
                </div>
                <div className="text-center">
                    Powered by me &copy; 2021
                </div>
            </footer>
        </>
    )
}

export default Footer;
