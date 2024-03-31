"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import Link from "next/link";
import React from "react";
import { Link } from 'react-scroll';


const NAV_ITEMS = [
    {
        label: "about",
        page: "about",
    },
    {
        label: "experience",
        page: "experience",
    },
    {
        label: "projects",
        page: "projects",
    },
];

const NavBar = () => {
    return (
        <div className="mt-6 fixed z-50 container ">
            <NavigationMenu>
                <NavigationMenuList className="">
                    {NAV_ITEMS.map((item, idx) => (
                        <NavigationMenuItem key={idx} >
                            <Link
                                key={idx}
                                to={item.page}
                                className={
                                    "block lg:inline-block text-neutral-900   hover:cursor-pointer"
                                }
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}

                            >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default NavBar;
