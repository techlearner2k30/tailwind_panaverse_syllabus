import Link from 'next/link'
import Image from 'next/image'

export default function Course(props: any) {

    const courses = props.courses;

    return (
        <div className='courses flex-wrap align-center md:flex justify-center px-12 py-12 mx-auto'>
           
            {
                courses.map((element: any, index: number) =>
                    <div className="container flex flex-col md:basis-1/3 px-2 mt-5 justify-between gap-2 items-center" key={index}>
                       { /* <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" /> */ }
                         <img className="max-h-64 mx-auto" src={`/${element.img_url}`} alt={element.name}/>
                        <h3 className='font-serif font-bold text-xl flex-grow'>{element.name}</h3>
                        <p className='text-sm text-left text-gray-500 '>{element.summary}</p>
                        <Link href={`/${element.link_text}`}className="bg-green-800 self-end px-5 py-2 text-white rounded-full my-3 hover:bg-green-700"> Details</Link>
                    </div>
                )
            }
        </div>
    )
}