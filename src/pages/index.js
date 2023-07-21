import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai"
import { Inter } from "next/font/google";
import standing from "../../public/standing.png";
import avatar from "../../public/avatar.png";
import becode from "../../public/becode.png";
import cisco from "../../public/cisco-ccna.png";
import cs50 from "../../public/cs50.png";
import pg from "../../public/postgresql.png";
import python from "../../public/Python.png";
import gc from "../../public/gc.png";
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Victor Philippe - ktorvi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-300 dark:bg-gray-800 min-h-screen px-10 py-10 md:px-20 lg:px-40">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="dark:text-white text-2xl font-mono">ktorvi.me</h1>
            <ul className="flex justify-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="dark:text-white cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 rounded-md ml-8" href="../../CV-VictorPhilippe-FR+EN.pdf" alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-700 md:text-6xl">Victor Philippe</h2>
            <h3 className="dark:text-white  text-2xl md:text-3xl leading-8  py-5 text-gray-800 font-mono">Junior Developer</h3>
            <p className="dark:text-white  text-md md:text-xl py-5 text-gray-800 max-width-lg">Junior developer seeking opportunities to grow and integrate a team, mainly self taught but motivated to fulfill your needs.</p>
          </div>
          <div className=" dark:text-white text-5xl flex justify-center gap-16 py-3 text-gray-800">
            <a href="https://www.instagram.com/ktor.vi/"> <AiFillInstagram /> </a>
            <a href="https://www.linkedin.com/in/victor-philippe-b54209257/"><AiFillLinkedin /></a>
            <a href="mailto:me@ktorvi.me" ><AiFillMail /></a>
          </div>
          <div className="mx-auto my-10 relative rounded-r-full">
            <Image className="mx-auto rounded-full w-60 h-60 md:h-96 md:w-96" src={avatar} alt="Victor Philippe standing" />
          </div>
        </section>
        <section className="py-5">
          <div>
            <h3 className="dark:text-white  text-3xl py-1">Projects I&apos;ve worked on</h3>
            <p className="dark:text-white  text-md py-2 text-gray-800">As a self-taught developer I have built several projects to showcase my competences,
              in various languages and fulfillng different objetives.</p>
          </div>
          <div className="my-3 lg:flex gap-10">
            <div className="flex-1 justify-between text-center shadow-lg p-10 rounded-corners">
              <h3 className=" dark:text-white text-lg font-medium pt-8 pb-2 mb-3 ">Blinest Blindtest Bot</h3>
              <Image className="my-2 mb-7" src={python} alt="python" />

              <a href="https://github.com/ktor-vi/bbb" className="dark:text-white py-2 underline">An piloted browser bot to be the best at blindtests on Blinest.com</a>
              <h4 className="dark:text-white font-bold my-2">Made using :</h4>
              <ul className="dark:text-white ">
                <li>Python</li>
                <li>Selenium</li>
              </ul>
            </div>
            <div className="dark:text-white flex-1 text-center shadow-lg p-10 rounded-corners">
              <h3 className="dark:text-white text-lg font-medium pt-8 pb-2 mb-3 ">Back My Books</h3>
              <Image className="my-2 rounded-corners" src={pg} alt="pg" />

              <a href="https://github.com/LVannebenne/back-my-books" className="dark:text-white py-2 underline">A project I worked on at the becode bootcamp  on Library management</a>
              <h4 className="font-bold my-2 dark:text-white ">Made Using :</h4>
              <ul className="dark:text-white ">
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-corners">
              <h3 className="text-lg font-medium pt-8 pb-2 mb-3 dark:text-white  ">Germaine Collard</h3>
              <Image className="my-2 mb-3" src={gc} alt="gc" />

              <a href="https://germainecollard.be" className="dark:text-white py-2 underline">During my internship at Mwesto Labs, Liège I worked on this shoe shop website  Mainly on the login and sign in parts</a>
              <h4 className="dark:text-white font-bold my-2">I used :</h4>
              <ul className="dark:text-white ">
                <li>Vue</li>
                <li>Bootstrap</li>
                <li>NuxtJS</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Educational background</h3>
            <p className="text-md py-2 text-gray-800 dark:text-white ">I am mainly self taught, but I had the chances to attend various trainings and educational opportunities.</p>
          </div>
          <div className="mt-3 lg:flex gap-10">
            <div className="flex-1 text-center shadow-lg p-10 rounded-corners">
              <h3 className="text-lg font-medium pt-8 pb-2 mb-3 dark:text-white ">CS 50 - C course from Harvard</h3>
              <Image className="my-2 mb-20" src={cs50} alt="cs50" />
              <a href="https://github.com/ktor-vi/bbb" className="dark:text-white y-2 underline">I attended the CS50 Computer Science Course from Harvard in 2023  completed the C programming assignments</a>
              <h4 className="font-bold my-2 dark:text-white ">I learned :</h4>
              <ul className="dark:text-white ">
                <li>C programming basics</li>
                <li>Pointers and File Management</li>
                <li>Structs and data structures</li>
              </ul>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-corners">
              <h3 className="text-lg font-medium pt-8 pb-2 mb-3 dark:text-white ">Becode Web Bootcamp</h3>
              <Image className=" h-45 w-45" src={becode} alt="becode" />
              <a href="https://github.com/ktor-vi/bbb" className="dark:text-white py-2 underline">A Web developer bootcamp in Liège, Belgium I attended in 2019</a>
              <h4 className="font-bold my-2 dark:text-white  ">I learned :</h4>
              <ul className="dark:text-white ">
                <li>NodeJS</li>
                <li>HTML + CSS</li>
                <li>Sass</li>
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-corners">
              <h3 className="text-lg font-medium pt-8 pb-2 mb-3 dark:text-white ">Cisco CCNA Training</h3>

              <Image className="w-30 my-2 mb-7" src={cisco} alt="cisco" />
              <a href="https://cisco.com" className=" dark:text-white py-2 underline">I attended a training on Cisco Networking in 2019</a>
              <h4 className="font-bold my-2 dark:text-white " >I  learned :</h4>
              <ul className="dark:text-white  ">
                <li>Basic Networking</li>
                <li>Management of enterpise networks</li>
              </ul>
            </div>

          </div>
        </section>
      </main>
    </div >
  );
}