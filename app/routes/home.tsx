import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumate" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar /> 
    <section className="main-section">
      <div className="page-heading py-16">
         <h1>Track Your Applications and Resume Ratings</h1>
      <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
     
    

    {resumes.length > 0 && (
      <div>
         {resumes.map((resume: Resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
   </section>
  </main>;
}
