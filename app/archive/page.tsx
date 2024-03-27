import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { client } from '@/lib/contentful'
import { ArrowRightIcon, ArrowTopRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'


const getPortfolios = async () => {
    const entries = await client.getEntries({ content_type: "portfoliov2" });
    return entries.items; // Access the items array directly
}


const Archive = async () => {

    const response = await getPortfolios()
    console.log(response)

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
                            <TableHead className="w-[100px]">Year</TableHead>
                            <TableHead>Project</TableHead>
                            <TableHead className="hidden sm:table-cell">Link</TableHead>
                            <TableHead className="hidden sm:table-cell">webtech</TableHead>
                            <TableHead className="hidden sm:table-cell">Github</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {response.map((portfolio) => {
                            const { year, weblink, githublink, name, thumbnail, webtech } = portfolio.fields;
                            return (
                                <TableRow key={portfolio.sys.id}>
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
                                        {weblink as string}
                                    </TableCell>

                                    <TableCell className="sm:table-cell">
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            {Array.isArray(webtech) && webtech.map(tech => (
                                                <li key={tech as string} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {tech as string}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </TableCell>
                                    <TableCell className="sm:table-cell">
                                        {githublink as string}
                                        {/* {thumbnail as string}   */}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>


    );
}

export default Archive
