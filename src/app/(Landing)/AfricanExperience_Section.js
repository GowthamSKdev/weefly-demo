import Image from "next/image";

function AfricanExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex justify-center items-center px-20">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#fad9cf] to-[#f28c72] z-10"></div> */}
      <div className="w-full font-jakarta relative">
        <Image
          src={"/assets/images/AfricanExperienceBg.png"}
          height={700}
          width={1000}
          className="absolute mix-blend-plus-lighter -left-16 -top-40"
        />
        <h1 className="font-black tracking-tight text-black text-[80px] leading-[150%] z-10">
          Live the <br /> African <br /> Experience
        </h1>
      </div>
      <div className="w-full flex h-full justify-center items-center">
        <p className="text-center text-3xl">
          Discover Local Options, <br /> Experience the Unexplored!
        </p>
      </div>
    </div>
  );
}

export default AfricanExperience;
