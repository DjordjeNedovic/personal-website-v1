import Link from 'next/link';
import {Lit} from "litlyx-js";

export default function Header({name}) {
    return (
        <header className="w-full border-b-2">
            <div className="md:flex sm:flex-row ">
                <Link href={`/`} className="flex-auto p-8 text-center" onClick={() => Lit.event("click-header-base")}>
                    <h2>{name}</h2>
                </Link>
                <Link href={`/posts`} className="flex-auto p-8 text-center" onClick={() => Lit.event("click-header-post")}>
                    <h2>Blog</h2>
                </Link>
                <Link href={`/personal`} className="flex-auto p-8 text-center" onClick={() => Lit.event("click-header-personal")}>
                    <h2>Personal</h2>
                </Link>
                <Link href={`/projects`} className="flex-auto p-8 text-center" onClick={() => Lit.event("click-header-projects")}>
                    <h2>Projects</h2>
                </Link>
            </div>
        </header>
    );
}
