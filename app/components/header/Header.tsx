import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Nav from './nav/Nav'

const navObj = [{ name: "Home", href: "#" },
{ name: "About", href: "#" },
{ name: "Vision", href: "#" },
{ name: "Contact", href: "#" },
/*
{ name: "Contact", href: "#" },
{ name: "Contact", href: "#" },
{ name: "Contact", href: "#" },
{ name: "Contact", href: "#" },
*/
]


export default function Header() {
    return (
        <div className="flex justify-between m-5 items-center flex-wrap">
            <div className="flex-shrink-0">
                <Link href="/"><Image src="/panaverse_logo.png" alt="test" width={100} height={100} />
                </Link>
            </div>
           <Nav/>
            <div className="flex-shrink-0">
                <Link href="/Contact"> Contact Us </Link>
            </div>
        </div>
    )
}