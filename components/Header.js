import Link from 'next/link';

export default function Header({name}) {
    return (
        <header className="w-full border-b-2">
            <div className="md:flex sm:flex-row ">
                <Link href={`/`} className="flex-auto p-8 text-center" >
                    <h2>{name}</h2>
                </Link>
                <Link href={`/posts`} className="flex-auto p-8 text-center" >
                    <h2>Blog</h2>
                </Link>
                <Link href={`/personal`} className="flex-auto p-8 text-center" >
                    <h2>Personal</h2>
                </Link>
                <Link href={`/projects`} className="flex-auto p-8 text-center" >
                    <h2>Projects</h2>
                </Link>
            </div>
        </header>
    );
}
