import Image from "next/image";

import SocialLink from "../components/social-link";
import { SocialLinks } from "../data/social-links";

function Footer() {
    return (
        <>
            <footer className="fixed bottom-0 inset-x-0 px-6 py-4 flex flex-col justify-around bg-gray-200 text-center">
                <div className="flex justify-evenly py-4">
                    {SocialLinks.map((link, i) => (
                        <SocialLink key={i} url={link.url} icon={link.icon} />
                    ))}
                </div>

                <div className="py-4">
                    &copy; 2021 Anindya Dey
                </div>
            </footer>
        </>
    )
}

export default Footer;
