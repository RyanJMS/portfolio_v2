import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "../interface/interfaces";

export default function ProjectCard({
  title,
  image,
  description,
  liveLink,
  repoLink,
}: ProjectCardProps) {
  return (
    <div className="">
      <div className="flex justify-center">
        <Image
          width={400}
          height={400}
          style={{ height: 250, width: 500 }}
          src={`/${image}`}
          alt={title}
        />
      </div>
      <h2 className="text-xl my-5">{title}</h2>
      <p className="text-left mx-auto max-w-lg mb-5">{description}</p>
      <div className="flex justify-center gap-8">
        <Link
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          rel="noopener"
          target="_blank"
          href={repoLink}
        >
          Github Repo
        </Link>
        <Link
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          rel="noopener"
          target="_blank"
          href={liveLink}
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}
