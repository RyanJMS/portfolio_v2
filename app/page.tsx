import Links from "./components/Links";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-800 text-black block box-border dark:text-white  mx-0 text-center p-10  ">
      <div className="flex justify-start ml-4">
        <DarkModeToggle />
      </div>
      <div className="leading-7">
        <h1 className="text-5xl mb-2">Ryan Schock</h1>
        <h2 className="text-xl">Full Stack Web Developer</h2>
        <h2 className="mb-4">Ottawa, Ontario</h2>
        <Links />
      </div>

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
