import Image from "next/image";

const Card = (props: any) => {
  return (
    <div className=" basis-1/3 flex-1  cursor-pointer">
      <div className=" relative block group">
        <Image
          alt="Project"
          src={props.project.src}
          width={100}
          height={100}
          className="absolute inset-0 rounded-lg w-full h-80 object-cover"
        />
        <div
          className=" relative transition-all rounded-lg bg-transparent
                               w-full h-80  group-hover:bg-[#464DAF]/50
                                "
        >
          <div className="px-6 py-16">
            <p className="font-Raleway uppercase font-light relative z-20  text-center text-md opacity-0 group-hover:opacity-100 text-white ">
              {props.project.tools}
            </p>
            <p className="pt-8 pb-4 font-Raleway font-semibold relative z-20  text-center text-xl opacity-0 group-hover:opacity-100 text-white ">
              {props.project.title}
            </p>
            <p className="font-Raleway font-normal relative z-20  text-center text-md opacity-0 group-hover:opacity-100 text-white ">
              {props.project.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
