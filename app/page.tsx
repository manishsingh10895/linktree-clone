import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { LinkCard } from "../components/LinkCard";
import { GitHubIcon, TwitterIcon } from "../components/Icons";

const inter = Inter({ subsets: ["latin"] });

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function Home() {
  return (
    <>
      <div className="flex items-center flex-col mx-auto w-full h-full justify-center pt-16 px-8">
        <Image
          priority
          className="rounded-full"
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
        />
        <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
        <div className="flex flex-grow"></div>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
        <div className="flex flex-grow"></div>
        <div className="flex items-center gap-4 mt-8 text-white pb-8">
          {data.socials.map((social) => (
            <a
              aria-label={`${social.title} link`}
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.href.includes("twitter") ? (
                <TwitterIcon />
              ) : social.href.includes("github") ? (
                <GitHubIcon />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
