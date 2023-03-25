import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import courseData from '../../public/data/course_data.json'

export default function Course(props: any) {
  //const strCourse:any = props['params']['course_name'] ;
  const courseObj = courseData[props['params']['course_name'] as keyof typeof courseData] ;
if(!courseObj){
  return (
  <>
  <h2 className='text-red-800 text-center font-bold py-5 px-6 text-2xl'>Kindly follow correct Route. </h2>
  <h2 className='text-red-800 text-center font-bold px-6 text-2xl pb-6'>Go back to Home via clicking on logo and follow correct route</h2>
  </>
  )
}else{
  return (
    <>
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 shadow-lg">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:rounded-lg sm:px-10">
        <div className="mx-auto">
          <img src={`/${courseObj.img_url}`} alt={courseObj.name} className="mx-auto my-6" />
          <div className="divide-y divide-gray-300/50">
            <h1 className='text-4xl text-black py-4 text-center font-bold'>{courseObj.name}</h1>
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>{courseObj.content}</p>
              <ul className="space-y-4">
                {
                  courseObj.quarters.map((element, index) =>

                    <li className="" key={index+1}>
                      <h3 className="text-2xl font-bold text-gray-900">QUARTER-{index + 1}:</h3>
                      <li className="flex items-center justify-between my-4" >
                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        <p className="ml-4 flex-1">

                          <span className="text-sm font-bold text-gray-700">{element}</span>
                        </p>
                      </li>
                    </li>
                  )
                }
              </ul>
              <p>Perfect for learning {courseObj.name}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>

  )
}
}
