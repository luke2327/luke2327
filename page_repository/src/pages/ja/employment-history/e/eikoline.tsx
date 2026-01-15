import Wrapper from '@/components/layout/Wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbChevronDownLeft } from 'react-icons/tb';
import Image from 'next/image';

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="flex items-baseline gap-2 pt-6 text-2xl text-[#fff]">
        <Image
          src="/favicon_eikoline.png"
          width={32}
          height={32}
          alt="eikoline"
          className="self-end"
        />
        Eikoline Inc.
        <div className="rounded-md bg-[#fff] px-1.5 text-sm text-[#000]">
          JP
        </div>
      </h1>
      <div className="mt-1">
        <p>
          国内及び海外商品に対して販売、在庫、精算、注文などを処理する統合管理ソリューションを開発を担当していました。
        </p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          API統合パッケージ構築
          <span className="text-sm text-[#c8c1bd]">
            2023.06. ~ 2024.04. (10ヶ月)
          </span>
        </h2>
        <p>
          社内共通APIレイヤーをnpmベースのパッケージとして設計・実装し、API通信構造を標準化し、重複ロジックを排除しました。
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              APIの変更時に単一ライブラリの更新で全サービスの同期構造を構築
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              APIのリクエスト/レスポンスタイプをサーバー-クライアント間E2E Type
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>Safetyで統合 - CI環境でのライブラリテストの自動化</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            - API使用ガイドおよび文書化を主導
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex flex-wrap gap-2">
              <li>NestJS</li>
              <li>tRPC</li>
              <li>rxJS</li>
              <li>Jest</li>
              <li>npm</li>
              <li>GitHub Actions</li>
              <li>AWS ECS</li>
              <li>AWS Lambda</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          ECサイト統合管理プラットフォームの構築
          <span className="text-sm text-[#c8c1bd]">
            2021.04. ~ 2024.06. (38ヶ月)
          </span>
        </h2>
        <p>
          日本および韓国のEコマースプラットフォームを統合管理するソリューションを構築しました。
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>入出庫、配送、在庫、発注管理システムの構築</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>ECサイトのAPI 連動</span>
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>eBay
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>Amazon
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>Shopify
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>Mercari
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>ECサイトのScraping</span>
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>Coupang
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>Smartstore
          </li>
          <li className="pl-4 text-[#fff]">
            <span className="pr-2 font-bold">・</span>ESM
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              APIインターフェースをDTOに体系化し、データフローの可視性を確保
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              SNS（LINE、Kakao）アラームを連携させてCSスタッフの業務効率を向上
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              SQS /
              SNSの導入により、注文・決済・配送イベントを非同期処理し、サービス間の結合度を下げ、障害の伝播を防止
            </span>
          </li>
          <li className="text-[#fff]">
            - NestJSとDrizzle ORMの組み合わせ
            <p className="flex pl-1">
              <TbChevronDownLeft />
              DBスキーマに基づくタイプ安全クエリを構成し、ランタイムのSQLエラーを事前に防止
            </p>
          </li>
          <li className="flex items-center text-[#fff]">
            - Javascript <MdKeyboardArrowRight /> Typescript マイグレーション
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex flex-wrap gap-2">
              <li>Nuxt</li>
              <li>TanStack Query</li>
              <li>NestJS</li>
              <li>Drizzle</li>
              <li>Tailwind</li>
              <li>Jest</li>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>AWS SNS</li>
              <li>AWS SQS</li>
              <li>AWS ECS</li>
              <li>AWS MemoryDB</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          海外及び国内配送管理プレッとホーム構築
          <span className="text-sm text-[#c8c1bd]">
            2019.06. ~ 2023.03. (44ヶ月)
          </span>
        </h2>
        <p>
          日本及び韓国の配送会社と協力してラベル出力、発送、返送などのサービスを提供するシステムを構築しました。
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              国内外配送会社連動(UPS、EMS、DHL、FedEx、qExpress、JPPostなど)
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>多言語対応(I18N)</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>APIを提供しない配送会社のラベル出力システム製作</span>
          </li>
          <li className="text-[#fff]">
            - Typescriptへの移行を推進
            <p className="flex pl-1">
              <TbChevronDownLeft />
              ランタイム前のエラーを洗い出し、業務効率を増進
            </p>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              ECSベースのオートスケーリングによる配送処理
              ピークトラフィックを安定的に吸収し、処理量を2倍以上改善
            </span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex flex-wrap gap-2">
              <li>Vue3</li>
              <li>Nuxt</li>
              <li>Pinia</li>
              <li>Tailwind</li>
              <li>Jest</li>
              <li>Jenkins</li>
              <li>ChartJS</li>
              <li>ExcelJS</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>WebSocket</li>
              <li>Docker</li>
              <li>AWS ECS</li>
              <li>AWS Lambda</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
