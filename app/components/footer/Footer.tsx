import Image from 'next/image'
import Link from 'next/link'
const navObj = [{ name: "Home", href: "" },
{ name: "About", href: "About" },
{ name: "Vision", href: "Vision" },
    /*
    { name: "Contact", href: "#" },
    
    { name: "Contact", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Contact", href: "#" },
    */
]



export default function Footer(props: any) {

    const footer_nav = props.nav;
    const courses = props.courses;

    return (
        <div className="md:flex justify-between gap-40 py-8 px-20 items-start bg-black text-white">
            <div className=" flex flex-col items-center">
                <Link href="/"><Image src="/panaverse_logo.png" alt="test" width={100} height={100} />
                </Link>
                <p className=" py-4 text-center w-72">Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</p>
            </div>
            <nav className='md:flex my-5 md:my-0 flex-col justify-between gap-5 flex-wrap'>
                <h3 className='text-bold text-lg underline '>Courses</h3>
                <ul className='flex ml-auto flex-col gap-2 text-white mt-4 pl-4 md:mt-0'>
                    {
                        courses.map( (element:Record<string,string>,index:number) =>
                            <li className='mx-1' key={index+1}>
                                <Link href={element.link_text} className=" text-white hover:text-gray-400"> {element.name} </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
            <nav className='my-5 md:my-0 md:flex flex-col justify-between gap-5 flex-wrap  '>
            <h3 className='text-bold text-lg underline '>Main Menu</h3>
                <ul className='flex ml-auto flex-col gap-2 text-white mt-4 pl-4 md:mt-0'>
                    {
                        footer_nav.map( (element:Record<string,string>,index:number) =>
                            <li className='mx-1' key={index+1}>
                                <Link href={`/${element.href}`} className="text-white hover:text-gray-400"> {element.name} </Link>
                            </li>

                        )
                    }
                     <li className='mx-1'>
                        <Link href="/Contact"> Contact Us </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}