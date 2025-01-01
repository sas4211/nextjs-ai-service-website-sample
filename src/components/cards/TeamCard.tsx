import Image from "next/image";
import { Separator } from "../ui/separator";

interface IProps {
  name: string;
  position: string;
  experience: string;
  image: string;
}

function TeamCard({ name, position, experience, image }: IProps) {
  return (
    <div className="rounded-[45px] p-8 md:p-[31px] border border-secondary border-b-[6px]">
      <div className="flex justify-between">
        <div className="flex gap-[20px] items-end">
          <div>
            <Image src={image} width={200} height={200} layout="responsive" alt="team image" />
          </div>
          <div>
            <p className="text-[20px] font-medium">{name}</p>
            <p>{position}</p>
          </div>
        </div>
        <div>
            <Image src="/images/linkedin.png" alt="linkedin icon" width={50} height={50}/>
        </div>
      </div>
      <div className="my-[28px]">
        <Separator className="border border-black" />
      </div>
      <div>
        <p className="text-p">{experience}</p>
      </div>
    </div>
  );
}

export default TeamCard;
