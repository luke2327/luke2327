import Wrapper from "@/components/layout/Wrapper"
import { MdKeyboardArrowRight } from "react-icons/md"
import Image from 'next/image'

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-6 text-2xl text-[#fff] flex gap-2 items-baseline">
        <Image src="/favicon_linger.svg" width={32} height={32} alt="linger" className="self-end" />
        Linger Corp.
      </h1>
      <div className="mt-1">
        <p>
          Developing a platform for trading digital sound sources and Japanesque fashion e-commerce platform.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Linger studio
          <span className="text-sm text-[#c8c1bd]">2021. 08 - 2022. 01</span>
        </h2>
        <p>A platform for trading digital sound sources</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- Sound source data management</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>Framer</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>NestJS</li>
              <li>Rust</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Linger gallery
          <span className="text-sm text-[#c8c1bd]">2021. 08 - 2021. 10</span>
        </h2>
        <p>Japanesque fashion e-commerce platform</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-center">- Legacy Code Cleanup and Javascript <MdKeyboardArrowRight className="mt-[1px]" /> Typescript migration</li>
          <li className="text-[#fff] flex items-center">- Cafe24 <MdKeyboardArrowRight className="mt-[1px]" /> Create an independent application</li>
          <li className="text-[#fff]">- I18N (Japanese, English)</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>NextJS</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>NestJS</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
