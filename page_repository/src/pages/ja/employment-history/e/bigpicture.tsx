import Wrapper from '@/components/layout/Wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbChevronDownLeft } from 'react-icons/tb';
import Image from 'next/image';

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="flex items-baseline gap-2 pt-6 text-2xl text-[#fff]">
        <Image
          src="/favicon_bigpicture.webp"
          width={32}
          height={32}
          alt="eikoline"
          className="self-end"
        />
        Bigpicture Interactive Inc.
      </h1>
      <div className="mt-1">
        <p>
          ネットカフェ管理プログラム及びユーザーアプリの開発を担当しています。
        </p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          コンポーネント統合パッケージ構築
          <span className="text-sm text-[#c8c1bd]">
            2024.08. ~ 現在 (17ヶ月)
          </span>
        </h2>
        <p>
          Reactベースのデザインシステム /
          コンポーネントライブラリのパッケージ構築とnpm配布しました。
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              Framer
              Motionに基づく共通アニメーションインタラクションレイヤーの構築
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              分散して管理されていた共通UIコンポーネントを中央化し、UIの変更を単一のポイントで管理できる構造に改善
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              Storybookベースのコンポーネント文書化により、デザイナーと開発者間のコミュニケーションコストを削減
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              npmパッケージの配布とバージョニング戦略を通じて長期運営構造を構築
            </span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex gap-2">
              <li>Vue3</li>
              <li>rxJS</li>
              <li>Jest</li>
              <li>Tailwind</li>
              <li>Framer</li>
              <li>Storybook</li>
              <li>Jenkins</li>
              <li>npm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          デスクトップアプリケーション構築
          <span className="text-sm text-[#c8c1bd]">
            2024.06. ~ 現在 (19ヶ月)
          </span>
        </h2>
        <p>
          ゲームに必要な情報や付随的な情報を提供するデスクトップアプリケーションを構築しました。
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              IPC
              MainとRenderer間のAPIをジェネレーターとして作成し、一貫性を維持
            </span>
          </li>
          <li className="text-[#fff]">
            -
            Promiseベースのコマンド型コードをRxJSパイプラインにリファクタリング
            <p className="flex pl-1">
              <TbChevronDownLeft />
              イベントリスナー及び非同期ロジックのコードライン（LOC）を約40%短縮
            </p>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              エラーハンドリングロジックの中央化により、デバッグ時間を短縮
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              DTOの標準化を通じて、API間の型不一致エラーを早期に発見できるように構築
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              ミニゲームや報酬獲得の視覚効果（アニメーション）を実装し、堅苦しいUXを改善
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>多言語対応(I18N)</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>ゲームコミュニティの構築</span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex flex-wrap gap-2">
              <li>Electron</li>
              <li>Vue3</li>
              <li>Vite</li>
              <li>rxJS</li>
              <li>TanStack Query</li>
              <li>Tailwind</li>
              <li>Jest</li>
              <li>TSyringe</li>
              <li>WebSocket</li>
              <li>Jenkins</li>
              <li>AWS Cognito</li>
              <li>AWS SNS</li>
              <li>AWS CF</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
