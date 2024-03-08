import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import NavBar from "./NavBar";
import { Sacramento } from "next/font/google";


export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="">
            <NavBar />
            {children}
        </main>
    );
}