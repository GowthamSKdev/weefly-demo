import Image from "next/image";

import Brand1 from "../../../public/assets/images/PaymentBrands/brand1.png";
import Brand2 from "../../../public/assets/images/PaymentBrands/brand2.png";
import Brand3 from "../../../public/assets/images/PaymentBrands/brand3.png";
import Brand4 from "../../../public/assets/images/PaymentBrands/brand4.png";
import Brand5 from "../../../public/assets/images/PaymentBrands/brand5.png";
import Brand6 from "../../../public/assets/images/PaymentBrands/brand6.png";
import Brand7 from "../../../public/assets/images/PaymentBrands/brand7.png";
import Brand8 from "../../../public/assets/images/PaymentBrands/brand8.png";
import Brand9 from "../../../public/assets/images/PaymentBrands/brand9.png";
import Brand10 from "../../../public/assets/images/PaymentBrands/brand10.png";
import Brand11 from "../../../public/assets/images/PaymentBrands/brand11.png";
import Brand12 from "../../../public/assets/images/PaymentBrands/brand12.png";
import Brand13 from "../../../public/assets/images/PaymentBrands/brand13.png";

const PaymentBrands = [
  {
    id: 1,
    src: Brand1,
    alt: "brand1",
  },
  {
    id: 2,
    src: Brand2,
    alt: "brand1",
  },
  {
    id: 3,
    src: Brand3,
    alt: "brand1",
  },
  {
    id: 4,
    src: Brand4,
    alt: "brand1",
  },
  {
    id: 5,
    src: Brand5,
    alt: "brand1",
  },
  {
    id: 6,
    src: Brand6,
    alt: "brand1",
  },
  {
    id: 7,
    src: Brand7,
    alt: "brand1",
  },
  {
    id: 8,
    src: Brand8,
    alt: "brand1",
  },
  {
    id: 9,
    src: Brand9,
    alt: "brand1",
  },
  {
    id: 10,
    src: Brand10,
    alt: "brand1",
  },
  {
    id: 11,
    src: Brand11,
    alt: "brand1",
  },
  // {
  //   id: 12,
  //   src: Brand12,
  //   alt: "brand1",
  // },
  // {
  //   id: 13,
  //   src: Brand13,
  //   alt: "brand1",
  // },
];

export default function PaymentOptionSection() {
  return (
    <>
      <div className="px-10 lg:px-20 xl:px-40 py-20 bg-white flex justify-center items-center pb-[169px] relative">
        <div className=" flex flex-col gap-14">
          <div className="flex flex-col">
            <h2 className="text-center font-semibold text-2xl lg:text-4xl font-jakarta mt-4 text-black">
              Enjoy Secure & Flexible Payment Options
            </h2>
            <p className="font-base font-sans text-base lg:text-xl text-center lg:leading-8 mt-4 text-black/80 xl:px-40">
              We make paying for your travel easy and stress free. Choose from a
              wide range of trusted local and international payment methods as
              well as debit/credit cards.
            </p>
          </div>
          <div className="flex flex-wrap gap-16 justify-center items-center px-20 ">
            {PaymentBrands.map((brand) => (
              <Image
                key={brand.id}
                src={brand.src}
                alt={brand.alt}
                height={60}
                width={60}
                className="object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>
        <Image
          src={`/assets/images/banner-bottom.png`}
          alt="banner-bottom"
          height={40}
          width={662}
          className="w-full absolute -bottom-[25px] object-cover h-20 border z-10"
        />
      </div>
    </>
  );
}
