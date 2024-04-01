import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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
import ImageCard from "./ImageCard";

const getPortfolios = async () => {
    const entries = await client.getEntries({ content_type: "portfoliov2" });
    return entries.items; // Access the items array directly
};

const Archive = async () => {
    const response = await getPortfolios();
    console.log(response);

    return (
        <div className="mx-auto items-center max-w-5xl min-h-screen px-6 py-10 sm:px-0 sm:py-10">
            <Link
                className=" text-slate-200 hover:text-lime-300 group mb-2 inline-flex items-center font-semibold text-lg leading-tight text-primary"
                href="/"
            >
                <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
                Akin
            </Link>
            <h1 className="text-4xl text-lime-300 font-bold tracking-tight sm:text-5xl mb-10">
                All Projects
            </h1>
            <Table className="text-md text-slate-400">
                <TableCaption className="text-slate-400">List of projects.</TableCaption>
                <TableHeader>
                    <TableRow className="">
                        {/* <TableHead className="w-[100px]">Image</TableHead> */}
                        <TableHead className="w-[100px] text-slate-200">Year</TableHead>
                        <TableHead className="text-slate-200">Project</TableHead>
                        <TableHead className="hidden sm:table-cell text-slate-200">webtech</TableHead>
                        <TableHead className="hidden sm:table-cell text-slate-200">Link</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {response.map((portfolio) => {
                        const { year, weblink, githublink, name, thumbnail, webtech } =
                            portfolio.fields;
                        return (
                            <TableRow key={portfolio.sys.id} className="text-slate-400">
                                <TableCell height={80}>{year as string}</TableCell>
                                <TableCell className="font-semibold table-cell sm:hidden">
                                    {weblink && (
                                        <Link href={weblink as string} title={weblink as string} className="hover:text-lime-300">
                                            <p className="group mb-2 inline-flex items-center leading-tight">
                                                {name as string}
                                                <ArrowTopRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </p>
                                        </Link>
                                    )}
                                </TableCell>
                                <TableCell className="font-semibold text-slate-200 hidden sm:table-cell">
                                    {name as string}
                                </TableCell>

                                <TableCell className="hidden sm:table-cell">
                                    <ul
                                        className="mt-2 flex flex-wrap"
                                        aria-label="Technologies used"
                                    >
                                        {Array.isArray(webtech) &&
                                            webtech.map((tech) => (
                                                <li key={tech as string} className="mr-1.5 mt-2">
                                                    <div className="flex items-center  rounded-full bg-lime-400/10 px-3 py-1 text-xs  leading-5 text-lime-300">
                                                        {tech as string}
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <Link href={weblink as string} className="hover:text-lime-300 font-semibold text-sm">
                                        <p className="transition-transform ease-in-out transform hover:scale-105">
                                            {weblink as string}
                                        </p>
                                    </Link>
                                    <Link href={githublink as string}>
                                        {githublink?.toString().includes("github") ? (
                                            <p className=" group mb-2 items-center inline-flex transition-transform ease-in-out transform hover:text-lime-300 hover:scale-105">
                                                GitHub <GitHubLogoIcon className="ml-1 h-4 w-4" />
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default Archive;
