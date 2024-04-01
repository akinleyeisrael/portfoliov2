import Link from 'next/link'

export const Footer = () => {
    return (
        <div className=" text-center pb-10 text-sm text-slate-400 space-y-4">
            <p> Built with <span className="font-semibold text-slate-200">Next.js</span> and <span className="font-semibold text-slate-200">Tailwind CSS</span>, deployed with <span className="font-semibold">Vercel</span></p>
            <p>Inspired by <Link href="https://brittanychiang.com/" target='_blank' className="hover:cursor-pointer hover:underline hover:text-lime-300  font-medium text-slate-200">BrittanyChiang</Link></p>
        </div>
    )
}

export default Footer