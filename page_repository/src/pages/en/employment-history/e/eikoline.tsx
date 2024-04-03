import Wrapper from "@/components/layout/Wrapper"
import { MdKeyboardArrowRight } from "react-icons/md"
import Image from 'next/image'

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-6 text-2xl text-[#fff] flex gap-2 items-baseline">
        <Image src="/favicon_eikoline.png" width={32} height={32} alt="eikoline" className="self-end" />
        Eikoline Inc.
        <div className="text-sm bg-[#fff] text-[#000] px-1.5 rounded-md">JP</div>
      </h1>
      <div className="mt-1">
        <p>
          Application that handles other parts such as product data, settlement, statistics, inventory, and orders sent to the Sellingtool.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Xenon
          <span className="text-sm text-[#c8c1bd]">April 2022 - February 2024</span>
        </h2>
        <p>Domestic e-commerce integrated management tools</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- E-commerce site scraping (Coupang, Smartstore, ESM, ...)</li>
          <li className="text-[#fff]">- E-commerce statistics</li>
          <li className="text-[#fff]">- Create a settlement invoice issuance</li>
          <li className="text-[#fff]">- Export / Import ・ Delivery management</li>
          <li className="text-[#fff]">- Inventory / Order management</li>
          <li className="text-[#fff]">- I18N (Japanese, English)</li>
          <li className="text-[#fff]">- Control user permissions and roles</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>Vue</li>
              <li>Nuxt2</li>
              <li>Tailwind</li>
              <li>ChartJS</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Express</li>
              <li>Sequelieze</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Sellingtool
          <span className="text-sm text-[#c8c1bd]">April 2022 - August 2023</span>
        </h2>
        <p>Overseas e-commerce integrated management tools</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- E-commerce site scraping (Amazon, eBay, Qoo10, ...)</li>
          <li className="text-[#fff]">- E-commerce statistics</li>
          <li className="text-[#fff]">- Integrated shipping company (UPS, EMS, DHL, FedEx, JPPost, ...)</li>
          <li className="text-[#fff] pl-4"><span className="font-bold pr-2">・</span>Label print</li>
          <li className="text-[#fff] pl-4"><span className="font-bold pr-2">・</span>Calculate rating</li>
          <li className="text-[#fff]">- I18N (Japanese, English)</li>
          <li className="text-[#fff] flex items-center">- Javascript <MdKeyboardArrowRight className="mt-[1px]" /> Typescript migration</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>Vue</li>
              <li>Nuxt2</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Express</li>
              <li>Sequelieze</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
