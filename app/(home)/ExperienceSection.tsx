import { Button } from "@/components/ui/button";
import { client } from "@/lib/contentful";
import { ArrowRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const getExperiences = async () => {
    const entries = await client.getEntries({
        content_type: "experience",
        order: ["sys.createdAt"],
    });
    return entries.items;
};
const getResume = async () => {
    const entries = await client.getEntries({ content_type: "resume" });
    return entries.items;
};

const Experience = async () => {
    const response = await getExperiences();
    const resumes = await getResume();
    console.log(response);
    console.log(resumes);
    return (
        <section id="experience" className="container">
            <div className="w-full py-12 lg:py-24 xl:py-32">
                <div className=" grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
                    <div className="space-y-4 lg:col-span-1 lg:sticky lg:top-24">
                        <div className="space-y-2 ">
                            <h1 className="text-2xl font-bold tracking-tighter text-lime-300 sm:text-3xl xl:text-4xl">
                                Relevant Experience
                            </h1>
                            <p className=" md:text-base/relaxed tracking-normal leading-loose text-slate-400 text-muted">
                                A collection of my professional experiences and milestones.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 lg:space-y-12 lg:col-span-2 ">
                        {response.map((exp) => {
                            const { jobtitle, company, date, jobdescription, exptech } =
                                exp.fields;
                            return (
                                <div
                                    className="space-y-2 hover:shadow-lg hover:bg-slate-300/5 p-4 hover:rounded-md"
                                    id="january-2019"
                                    key={exp.sys.id}
                                >
                                    <span className="text-xl font-bold mb-6 text-lime-300">
                                        {jobtitle as string}{" "}
                                        <span className="inline-block">
                                            <DotFilledIcon />
                                        </span>{" "}
                                        <span className="inline-block">{company as string}</span>
                                    </span>
                                    <p className="leading-normal font-medium text-slate-200">
                                        {date as string}
                                    </p>
                                    <p className="text-sm  mb-4 text-slate-400 tracking-normal leading-loose">
                                        {jobdescription as string}
                                    </p>
                                    <ul
                                        className="mt-2 flex flex-wrap"
                                        aria-label="Technologies used"
                                    >
                                        {Array.isArray(exptech) &&
                                            exptech.map((tech) => (
                                                <li key={tech as string} className="mr-1.5 mt-2">
                                                    <div className="flex items-center  rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                                                        {tech as string}
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="">
                    {resumes.map((file: any) => {
                        const { resume } = file.fields;
                        return (
                            <Link
                                key={file.sys.id}
                                className="group mb-2 inline-flex items-center rounded  text-center tracking-tight text-md font-bold text-slate-200 hover:text-lime-300"
                                href={resume?.fields?.file?.url}
                            >
                                View Full Resume Archive
                                <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
