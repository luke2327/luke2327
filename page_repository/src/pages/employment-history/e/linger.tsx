import Wrapper from "@/components/layout/Wrapper"
import { MdKeyboardArrowRight } from "react-icons/md"
import Image from 'next/image'

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-6 text-2xl text-[#fff] flex gap-2 items-baseline">
        <Image src="/favicon_linger.svg" width={32} height={32} alt="linger" className="self-end" />
        Linger Corp.
        <span className="text-lg text-[#c8c1bd]">(주식회사 링거)</span>
      </h1>
      <div className="mt-1">
        <p>음악 데이터를 관리 및 Ativ, Solana 등 블록체인 관련 기술과 Rust 언어를 사용하여 음원거래 플랫폼을 개발 하였습니다.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Linger studio
          <span className="text-sm text-[#c8c1bd]">2021. 08 - 2022. 01</span>
        </h2>
        <p>디지털 음원 거래 플랫폼</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 음원 데이터 관리</li>
          <li className="text-[#fff]">- 20페이지 분량 개발</li>
          <li className="text-[#fff]">- 페이지내 데이터 최적화 및 로딩속도 개선</li>
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
        <p>일본향 패션 전자상거래 플랫폼</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-center">- 레거시코드 정리 및 Javascript <MdKeyboardArrowRight className="mt-[1px]" /> Typescript 마이그레이션</li>
          <li className="text-[#fff] flex items-center">- Cafe24 <MdKeyboardArrowRight className="mt-[1px]" /> 자체 제작 애플리케이션</li>
          <li className="text-[#fff]">- I18N (일본어, 영어)</li>
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
