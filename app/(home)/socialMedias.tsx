import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function SocialMedia() {
    return (
        <div className="flex pt-6 gap-6 justify-center ">
            <div className="w-8 h-8 flex justify-center items-center  text-slate-200 hover:text-lime-300">
                <Link target="_blank" href={"https://www.instagram.com/mrjustizzy"}>
                    <InstagramLogoIcon className="w-6 h-6" />
                </Link>
            </div>
            <div className="w-8 h-8 flex justify-center items-center rounded-full text-slate-200 hover:text-lime-300">
                <Link target="_blank" href={"https://github.com/akinleyeisrael"}>
                    <GitHubLogoIcon className="w-6 h-6" />
                </Link>
            </div>
            <div className="w-8 h-8 flex justify-center items-center rounded-full text-slate-200 hover:text-lime-300">
                <Link target="_blank" href={"https://www.linkedin.com/in/akinola-akinleye-1612b6224/"}>
                    <LinkedInLogoIcon className="w-6 h-6" />
                </Link>
            </div>
        </div>
    );
}
export function SocialMediaful() {
    return (
        <div className="grid grid-cols-3 sm:py-10  sm:grid-cols-1 gap-6 fixed  sm:px-12 ">
            <div className="w-8 h-8 flex justify-center items-center  text-slate-200 hover:text-lime-300">
                <Link target="_blank" href={"https://www.instagram.com/mrjustizzy"}>
                    <InstagramLogoIcon className="w-6 h-6" />
                </Link>
            </div>
            <div className="w-8 h-8 flex justify-center items-center rounded-full text-slate-200 hover:text-lime-300">
                <Link target="_blank" href={"https://github.com/akinleyeisrael"}>
                    <GitHubLogoIcon className="w-6 h-6" />
                </Link>
            </div>
            <div className="w-8 h-8 flex justify-center items-center rounded-full text-slate-200 hover:text-lime-300">
                <Link target="_blank" href={"https://www.linkedin.com/in/akinola-akinleye-1612b6224/"}>
                    <LinkedInLogoIcon className="w-6 h-6" />
                </Link>
            </div>
        </div>
    );
}