import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import python from "../../public/Python.png";
import avatar from "../../public/avatar.png";
import becode from "../../public/becode.png";
import cisco from "../../public/cisco-ccna.png";
import cs50 from "../../public/cs50.png";
import gc from "../../public/gc.png";
import pg from "../../public/postgresql.png";
import dn from "../../public/school19.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Victor Philippe - ktorvi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-300 px-10 py-10 dark:bg-gray-800 md:px-20 lg:px-40">
        <section className="">
          <nav className="mb-12 flex justify-between py-10">
            <h1 className="font-mono text-2xl dark:text-white">ktorvi.me</h1>
            <ul className="flex justify-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="ml-8 rounded-md bg-gradient-to-r from-teal-400 to-teal-600 px-4 py-2 text-white"
                  href="../../CV-VictorPhilippe-FR+EN.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center ">
            <h2 className="py-2 text-5xl text-teal-700 md:text-6xl">
              Victor Philippe
            </h2>
            <h3 className="py-5  font-mono text-2xl leading-8  text-gray-800 dark:text-white md:text-3xl">
              Junior Developer
            </h3>
            <p className="text-md  max-width-lg py-5 text-gray-800 dark:text-white md:text-xl">
              Junior developer seeking opportunities to integrate a team and
              grow, highly motivated to fulfill your needs.
            </p>
          </div>
          <div className=" flex justify-center gap-16 py-3 text-5xl text-gray-800 dark:text-white">
            <a href="https://www.instagram.com/ktor.vi/">
              {" "}
              <AiFillInstagram />{" "}
            </a>
            <a href="https://www.linkedin.com/in/victor-philippe-b54209257/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:me@ktorvi.me">
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto my-10 rounded-r-full">
            <Image
              className="mx-auto h-60 w-60 rounded-full md:h-96 md:w-96"
              src={avatar}
              alt="Victor Philippe avatar"
            />
          </div>
        </section>
        <section className="py-5">
          <div>
            <h3 className="py-1  text-3xl dark:text-white">
              Projects I&apos;ve worked on
            </h3>
            <p className="text-md  py-2 text-gray-800 dark:text-white">
              I have built numerous projects fulfilling different objectives, in
              various languages.
            </p>
          </div>
          <div className="my-3 gap-10 lg:flex">
            <div className="rounded-corners flex-1 justify-between p-10 text-center shadow-lg">
              <h3 className=" mb-3 pb-2 pt-8 text-lg font-medium dark:text-white ">
                Blinest Blindtest Bot
              </h3>
              <Image
                className="mx-auto my-2 lg:mb-8 lg:w-80"
                src={python}
                alt="python"
              />

              <a
                href="https://github.com/ktor-vi/bbb"
                className="py-2 underline dark:text-white"
              >
                An piloted browser bot to be the best at blindtests on
                Blinest.com
              </a>
              <h4 className="my-2 font-bold dark:text-white">Made using :</h4>
              <ul className="dark:text-white ">
                <li>Python</li>
                <li>Selenium</li>
              </ul>
            </div>
            <div className="rounded-corners flex-1 p-10 text-center shadow-lg dark:text-white">
              <h3 className="mb-3 pb-2 pt-8 text-lg font-medium dark:text-white ">
                Back My Books
              </h3>
              <Image className="mx-auto my-2 mb-3 lg:w-80" src={pg} alt="pg" />

              <a
                href="https://github.com/LVannebenne/back-my-books"
                className="py-2 underline dark:text-white"
              >
                A project I worked on at the becode bootcamp on library
                management
              </a>
              <h4 className="my-2 font-bold dark:text-white ">Made Using :</h4>
              <ul className="dark:text-white ">
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="rounded-corners flex-1 p-10 text-center shadow-lg">
              <h3 className="mb-3 pb-2 pt-8 text-lg font-medium dark:text-white  ">
                Germaine Collard
              </h3>
              <Image className="mx-auto my-2 mb-3 lg:w-80" src={gc} alt="gc" />

              <a
                href="https://germainecollard.be"
                className="py-2 underline dark:text-white"
              >
                During my internship at Mwesto Labs, Liège I worked on this shoe
                shop website, mainly on the login and sign in parts
              </a>
              <h4 className="my-2 font-bold dark:text-white">I used :</h4>
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
            <div className="rounded-corners flex-1 justify-items-center p-10 text-center shadow-lg">
              <h3 className="mb-3 pb-2 pt-8 text-lg font-medium  dark:text-white ">
                Student at School 19
              </h3>

              <Image
                className="w-30 mx-auto my-2 mb-7 lg:w-80"
                src={dn}
                alt="School 19"
              />
              <a
                href="https://www.campus19.be"
                className=" py-2 underline dark:text-white"
              >
                I am currently a student at Campus19, Brussels, 19 is a member
                of the 42 Network.
              </a>
              <h4 className="my-2 font-bold dark:text-white ">
                I am learning :
              </h4>
              <ul className="dark:text-white  ">
                <li>C programming</li>
                <li>C++ programming</li>
                <li>Web Development</li>
                <li>Linux sysadmin</li>
              </ul>
            </div>
            <h3 className="py-1 text-3xl dark:text-white ">
              Educational background
            </h3>
            <p className="text-md py-2 text-gray-800 dark:text-white ">
              I am mostly self taught, and I took the opportunity to attend
              various training and educational opportunities.
            </p>
          </div>
          <div className="mt-3 gap-10 lg:flex">
            <div className="rounded-corners flex-1 p-10 text-center shadow-lg">
              <h3 className="mb-3 pb-2 pt-8 text-lg font-medium dark:text-white ">
                CS 50 - C course from Harvard
              </h3>
              <Image
                className=" sm:h-45 sm:w-45 mx-auto my-2 mb-20 lg:w-80"
                src={cs50}
                alt="cs50"
              />
              <a
                href="https://https://pll.harvard.edu/course/cs50-introduction-computer-science"
                className="y-2 underline dark:text-white"
              >
                I attended the CS50 Computer Science Course from Harvard in 2023
                and completed the C programming assignments
              </a>
              <h4 className="my-2 font-bold dark:text-white ">I learned :</h4>
              <ul className="dark:text-white ">
                <li>C programming basics</li>
                <li>Pointers and File Management</li>
                <li>Structs and data structures</li>
              </ul>
            </div>
            <div className="rounded-corners flex-1 p-10 text-center shadow-lg">
              <h3 className="mb-3 pb-2 pt-8 text-lg font-medium dark:text-white ">
                Becode Web Bootcamp
              </h3>
              <Image
                className=" sm:h-45 sm:w-45 mx-auto"
                src={becode}
                alt="becode"
              />
              <a
                href="https://becode.org"
                className="py-2 underline dark:text-white"
              >
                A Web developer bootcamp in Liège, Belgium that I attended in
                2019
              </a>
              <h4 className="my-2 font-bold dark:text-white  ">I learned :</h4>
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
          </div>
        </section>
      </main>
    </div>
  );
}
