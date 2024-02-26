import Wrapper from "@/components/layout/Wrapper"
import { MdKeyboardArrowRight } from "react-icons/md"

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-4 text-2xl text-[#fff] flex gap-2 items-baseline">
        Eikoline Inc.
        <span className="text-lg text-[#c8c1bd]">(주식회사 에이코라인)</span>
        <div className="text-sm bg-[#fff] text-[#000] px-1.5 rounded-md">JP</div>
      </h1>
      <div className="mt-1">
        <p>국내 및 해외 상품에 대해 판매, 재고, 정산, 주문 등을 처리하는 통합관리 솔루션을 개발하였습니다.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Xenon
          <span className="text-sm text-[#c8c1bd]">2022. 04 - 2024. 01</span>
        </h2>
        <p>국내 전자상거래 통합관리 툴</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 이커머스 사이트 스크래핑 (Coupang, Smartstore, ESM, ...)</li>
          <li className="text-[#fff]">- 이커머스 통계 산출</li>
          <li className="text-[#fff]">- 이커머스 정산/인보이스 산출</li>
          <li className="text-[#fff]">- 수 ・ 출입 배송관리 추가</li>
          <li className="text-[#fff]">- 재고 주문관리 추가</li>
          <li className="text-[#fff]">- 다국어 처리 (일본어, 영어)</li>
          <li className="text-[#fff]">- 유저권한 및 규칙 추가</li>
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
          <span className="text-sm text-[#c8c1bd]">2022. 04 - 2023. 08</span>
        </h2>
        <p>해외 전자상거래 통합관리 툴</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 이커머스 사이트 스크래핑 (Amazon, eBay, Qoo10, ...)</li>
          <li className="text-[#fff]">- 이커머스 통계 산출</li>
          <li className="text-[#fff]">- 배송서비스 연동 (UPS, EMS, DHL, FedEx, JPPost, ...)</li>
          <li className="text-[#fff] pl-4"><span className="font-bold pr-2">・</span>라벨 프린트</li>
          <li className="text-[#fff] pl-4"><span className="font-bold pr-2">・</span>운임 계산</li>
          <li className="text-[#fff]">- 다국어 처리 (일본어, 영어)</li>
          <li className="text-[#fff] flex items-center">- Javascript <MdKeyboardArrowRight className="mt-[1px]" /> Typescript 마이그레이션</li>
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
