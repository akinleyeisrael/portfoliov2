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
import SlideUp from "./slide-up";



const getPortfolios = async () => {
  const entries = await client.getEntries({ content_type: "portfoliov2" });
  return entries.items; // Access the items array directly
};
const SoftwareProjects = async () => {
  const response = await getPortfolios();
  console.log(response);

  return (
    <section id="projects" className="container">
      <div className="text-center pb-10">
        <h1 className="text-2xl  font-bold tracking-tighter sm:text-3xl xl:text-4xl">
          Projects
        </h1>
        <p className=" text-gray-500 md:text-base/relaxed">
          A couple of software developed
        </p>
      </div>
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
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2 shadow-2xl">
                    <Link href={weblink as string}>
                      <ContentfulImage
                        src={thumbnail?.fields?.file?.url}
                        alt=""
                        width={1000}
                        height={600}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
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
              </SlideUp>
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
