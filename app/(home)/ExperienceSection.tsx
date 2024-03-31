import { Button } from "@/components/ui/button";
import { client } from "@/lib/contentful";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const getExperiences = async () => {
    const entries = await client.getEntries({ content_type: "experience" });
    return entries.items; // Access the items array directly
};

const Experience = async () => {
    const response = await getExperiences();
    console.log(response);
    return (
        <section id="experience" className="">
            <div className="w-full py-12 lg:py-24 xl:py-32">
                <div className="container grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
                    <div className="space-y-4 lg:col-span-1 lg:sticky lg:top-24">
                        <div className="space-y-2 ">
                            <h1 className="text-2xl font-bold tracking-tighter text-orange-200 sm:text-3xl xl:text-4xl">
                                Relevant Experience
                            </h1>
                            <p className=" md:text-base/relaxed text-slate-200">
                                A collection of my professional experiences and milestones.
                            </p>
                        </div>

                    </div>

                    <div className="space-y-8 lg:space-y-12 lg:col-span-2 text-slate-50">
                        {response.map((exp) => {
                            const { jobtitle, company, date, jobdescription, exptech } = exp.fields;
                            return (
                                <div className="space-y-2 " id="january-2019" key={exp.sys.id}>
                                    <span className="text-xl font-bold mb-6 hover:text-orange-200">
                                        {jobtitle as string} . <span className="inline-block">{company as string}</span>
                                    </span>
                                    <p className="leading-normal font-medium">{date as string}</p>
                                    <p className="text-sm leading-normal mb-4  dark:text-neutrazl-400">
                                        {jobdescription as string}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {Array.isArray(exptech) && exptech.map(tech => (
                                            <li key={tech as string} className="mr-1.5 mt-2">
                                                <div className="flex items-center bg-orange-200 rounded-full px-3 py-1 text-xs font-medium leading-5 text-black">
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
            </div>
        </section>
    );
};

export default Experience;
