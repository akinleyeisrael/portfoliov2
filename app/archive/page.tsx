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
        <div>
            <div className="mx-auto items-center max-w-5xl min-h-screen px-6 py-10 sm:px-0 sm:py-10">
                <Link
                    className="group mb-2 inline-flex items-center font-semibold text-lg leading-tight text-primary"
                    href="/"
                >
                    <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
                    Akin
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-10">
                    All Projects
                </h1>
                <Table className="text-base">
                    <TableCaption>List of projects.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead className="w-[100px]">Year</TableHead>
                            <TableHead className="">Project</TableHead>
                            <TableHead className="hidden sm:table-cell">webtech</TableHead>
                            <TableHead className="hidden sm:table-cell">Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {response.map((portfolio) => {
                            const { year, weblink, githublink, name, thumbnail, webtech } =
                                portfolio.fields;

                            // const fileUrl = response[0]?.fields?.thumbnail?.fields?.file?.url;
                            // if (typeof fileUrl === 'string') {
                            //     console.log(fileUrl); // Output: '//images.ctfassets.net/4jvmgw0k1i1y/15TCtaLd7Wzp4SfkU215Nk/495fcbe3b00095e7531c14ce258caac4/client.png'
                            // } else {
                            //     console.error("File URL is not a string or thumbnail data is missing.");
                            // }
                            return (

                                <TableRow key={portfolio.sys.id}>
                                    <TableCell height={80}>
                                        <ImageCard
                                            title={name as string}
                                            url={thumbnail?.fields?.file?.url}
                                        />
                                    </TableCell>
                                    <TableCell height={80}>{year as string}</TableCell>
                                    {/* conditional render for one cell */}
                                    <TableCell className="font-semibold table-cell sm:hidden">
                                        {weblink && (
                                            <Link href={weblink as string} title={weblink as string}>
                                                <p className="group mb-2 inline-flex items-center leading-tight">
                                                    {name as string}
                                                    <ArrowTopRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </p>
                                            </Link>
                                        )}
                                    </TableCell>
                                    <TableCell className="font-semibold hidden sm:table-cell">
                                        {name as string}
                                    </TableCell>


                                    <TableCell className="font-semibold hidden sm:table-cell">
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
                                    </TableCell>
                                    <TableCell className="font-semibold hidden sm:table-cell">
                                        <Link href={weblink as string}>
                                            {weblink as string}
                                        </Link>
                                        {githublink as string}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Archive;
