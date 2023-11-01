import Image from "next/image";
import { SkillCardProps } from "../interface/interfaces";

export default function SkillCard({ title, image }: SkillCardProps) {
  return (
    <div className="">
      <h1 className="text-xl mb-4">{title}</h1>
      <div className="flex justify-center">
        <Image
          width={100}
          height={100}
          className="mb-4"
          src={`${image}`}
          alt={title}
        />
      </div>
    </div>
  );
}
