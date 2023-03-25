import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Link from 'next/link'
import Course from './components/Course/course'
import Footer from './components/footer/Footer'


const navObj = [{ name: "Home", href: "#" },
{ name: "About", href: "#" },
{ name: "Vision", href: "#" }
]

const courses = [
  {
    name : "Web 3.0 (Blockchain) and Metaverse Specialization",
    content : "",
    img_url : "course_images/blockchain.png",
    summary : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam",
    link_text : "blockchain"
  },
  {
    name : "Artificial Intelligence (AI) and Deep Learning Specialization",
    content : "",
    img_url : "course_images/ai.jpg",
    summary : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam",
    link_text : "ai"
  },
  {
    name : "Cloud-Native Computing Specialization",
    content : "",
    img_url : "course_images/cloud.jpg",
    summary : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam",
    link_text : "cloud"
  },
  {
    name : "Ambient Computing and IoT Specialization",
    content : "",
    img_url : "course_images/iot.jpg",
    summary : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam",
    link_text : "iot"
  },
  {
    name : "Genomics and Bioinformatics Specialization",
    content : "",
    img_url : "course_images/genomics.jpg",
    summary : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam",
    link_text : "genomics"
  },
  {
    name : "Network Programmability and Automation Specialization",
    content : "",
    img_url : "course_images/network.jpg",
    summary : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam",
    link_text : "network"
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      <Course courses={courses} />
    </>
  )
}
