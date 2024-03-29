import { Button } from "@/components/ui/button";
import { client } from "@/lib/contentful";
import ContentfulImage from "@/lib/contentful-image";
import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
];

const getPortfolios = async () => {
  const entries = await client.getEntries({ content_type: "portfoliov2" });
  return entries.items; // Access the items array directly
};
const SoftwareProjects = async () => {
  const response = await getPortfolios();
  console.log(response)

  return (
    <section id="projects">
      {/* <h1 className="my-10 font-bold text-2xl">
        Projects
        <hr className="w-6 h-1 my-2 bg-primary border-0 rounded"></hr>
      </h1> */}
      <div className="flex flex-col space-y-28">
        {response.map((portfolio, idx) => {
          const {
            year,
            weblink,
            portfoliodescription,
            githublink,
            name,
            thumbnail,
            webtech,
          } = portfolio.fields;
          return (
            <div key={idx}>
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={weblink as string}>
                    <ContentfulImage
                      src={thumbnail?.fields?.file?.url}
                      alt=""
                      width={1000}
                      height={600}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-10 md:w-1/2 md:mt-2">
                  <h1 className="text-xl font-bold mb-6">{name as string}</h1>
                  <p className="text-sm leading-normal mb-4 text-neutral-600 dark:text-neutrazl-400">
                    {portfoliodescription as string}
                  </p>
                  <div className="flex flex-row align-bottom gap-4">
                    <Link href={githublink as string} target="_blank">
                      <GitHubLogoIcon className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                    <Link href={weblink as string} target="_blank">
                      <ArrowTopRightIcon className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                  </div>
                  <div>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {Array.isArray(webtech) &&
                        webtech.map((tech) => (
                          <li key={tech as string} className="mr-1.5 mt-2">
                            <div className="flex items-center  rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech as string}
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-10">
        <Link
          className="group mb-2 inline-flex items-center rounded  text-center leading-tight text-primary"
          href="/archive"
        >
          View Full Resume Archive
          <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
};

export default SoftwareProjects;
