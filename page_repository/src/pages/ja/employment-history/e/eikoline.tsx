import Wrapper from "@/components/layout/Wrapper"
import { MdKeyboardArrowRight } from "react-icons/md"

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-4 text-2xl text-[#fff] flex gap-2 items-baseline">
        Eikoline Inc.
        <span className="text-lg text-[#c8c1bd]">(株式会社エイコーライン)</span>
        <div className="text-sm bg-[#fff] text-[#000] px-1.5 rounded-md">JP</div>
      </h1>
      <div className="mt-1">
        <p>
        国内及び海外商品に対して販売、在庫、精算、注文などを処理する統合管理ソリューションを開発しました。
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Xenon
          <span className="text-sm text-[#c8c1bd]">2022. 04 - 2024. 01</span>
        </h2>
        <p>国内電子商取引統合管理ツール</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- Eコマースサイトの Scraping (Coupang, Smartstore, ESM, ...)</li>
          <li className="text-[#fff]">- Eコマース統計の算出</li>
          <li className="text-[#fff]">- Eコマース精算/インボイス算出</li>
          <li className="text-[#fff]">- 輸·出入り配送管理追加</li>
          <li className="text-[#fff]">- 在庫注文管理追加</li>
          <li className="text-[#fff]">- 多言語処理(日本語、英語)</li>
          <li className="text-[#fff]">- ユーザー権限とルールの追加</li>
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
        <p>海外電子商取引統合管理ツール</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- Eコマースサイトの Scraping (Amazon, eBay, Qoo10, ...)</li>
          <li className="text-[#fff]">- Eコマース統計の算出</li>
          <li className="text-[#fff]">- 配送サービス連動 (UPS, EMS, DHL, FedEx, JPPost, ...)</li>
          <li className="text-[#fff] pl-4"><span className="font-bold pr-2">・</span>ラベルプリント</li>
          <li className="text-[#fff] pl-4"><span className="font-bold pr-2">・</span>運賃計算</li>
          <li className="text-[#fff]">- 多言語処理(日本語、英語)</li>
          <li className="text-[#fff] flex items-center">- Javascript <MdKeyboardArrowRight className="mt-[1px]" /> Typescript 変換</li>
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
