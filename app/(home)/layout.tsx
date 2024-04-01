import { TracingBeam } from "@/components/ui/tracing-beam";
import NavBar from "./NavBar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <TracingBeam className="">
                <NavBar />
                {children}
            </TracingBeam>
        </div>
    );
}


