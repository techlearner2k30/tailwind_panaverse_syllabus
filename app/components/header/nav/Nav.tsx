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


export default function Nav() {
  return (
    <nav className='flex  flex-[100%] order-last justify-center mt-5 md:order-none md:flex-auto md:my-0'>
      <ul className='flex justify-between items-center'>
        {
          navObj.map( (element,index) =>
            <li className='mx-4' key={index}>
              <Link href={`/${element.href}`} className="px-5 py-2  bg-blue-500 text-white rounded-full hover:bg-black"> {element.name} </Link>
            </li>
          )
        }
      </ul>
    </nav>

  )
}