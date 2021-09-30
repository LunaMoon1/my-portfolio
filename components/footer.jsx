import SocialLink from "../components/social-link";
import { SocialLinks } from "../data/social-links";

function Footer() {
    return (
        <>
            <div className="fixed bottom-0 w-full px-2 py-8 flex justify-evenly bg-gray-200">
                {SocialLinks.map((link, i) => (
                    <SocialLink key={i} url={link.url} icon={link.icon} />
                ))}
            </div>
        </>
    )
}

export default Footer;
