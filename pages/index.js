import "tailwindcss/tailwind.css";
import Head from "next/head";
import Image from "next/image";
import SocialLink from "../components/social-link";
import { SocialLinks } from "../data/social-links";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anindya Dey | Full-stack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto mt-4">
        <div className="px-6 py-3 flex justify-between items-center">
          <div>
            <a href="#" className="text-4xl font-bold">
              AD
            </a>
          </div>
          <div className="space-x-6">
            <a href="#" className="text-lg font-extralight">
              About Me
            </a>
            <a
              href="#"
              className="px-6 py-2 border-black border-2 rounded-full text-lg text-white bg-black hover:text-black hover:bg-white"
            >
              Say Hi!
            </a>
          </div>
        </div>
        <div className="mt-8 px-3 py-2 flex flex-col items-center">
          <div>
            <Image
              alt="Profile picture of Anindya Dey"
              src="/images/profile.jpg"
              height={200}
              width={200}
              className="rounded-full"
            />
          </div>
          <div className="mt-8 text-5xl font-light">Anindya Dey</div>
          <div className="mt-3 text-2xl font-light">Full-stack Developer</div>
        </div>
        <div className="mt-8 px-3 py-2 flex justify-center space-x-8">
          {SocialLinks.map((link, i) => (
            <SocialLink key={i} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
