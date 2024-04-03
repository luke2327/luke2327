import Wrapper from "@/components/layout/Wrapper"
import Image from 'next/image'

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-6 text-2xl text-[#fff] flex gap-2 items-baseline">
        <Image src="/favicon_playauto.ico" width={32} height={32} alt="playauto" className="self-end" />
        Playauto Inc.
      </h1>
      <div className="mt-1">
        <p>
        国内および日本のオンラインセラーのための電子商取引統合管理ソリューションを開発しました。
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          ソリューション管理
          <span className="text-sm text-[#c8c1bd]">2019. 08 - 2020. 10</span>
        </h2>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-baseline">
            <p className="w-8">1.</p>
            <span>以下のAWSサービスを利用してサーバーを管理しました。<br />(EC2、ECS、ECR、Route53、CloudFront、Lambda、S3)</span>
          </li>
          <li className="text-[#fff] flex items-baseline">
            <p className="w-8">2.</p>
            <span>AngularJS及びActionheroを利用してメンテナンス及び新機能を導入し、反応型UIを追加してUXを向上させました。</span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>AngularJS</li>
              <li>Loco</li>
              <li>Gulp</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Actionhero</li>
              <li>Redis</li>
              <li>Websocket</li>
              <li>Jade</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          テーブルモジュールを交換します
          <span className="text-sm text-[#c8c1bd]">2020. 09 - 2020. 10</span>
        </h2>
        <p>データベースの効率性と安定性を向上させるために、古いテーブル モジュールを交換しました。</p>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">module</p>
            <ul className="flex gap-2">
              <li>DevExtreme</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          配送サービスの追加です
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 07 - 2020. 08</span>
        </h2>
        <p>日本の郵便局、FedEx、DHLをご利用のお客様を対象に、急なサポート変更に対応し、迅速に新機能を開発しました。</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 新規宅配サービス追加:FedEx 9件、DHL 2件</li>
          <li className="text-[#fff]">- 3種類の宅配サービスに対するピックアップ要請機能の実装</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          ソリューション管理向上のためにBabelを導入します
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 05</span>
        </h2>
        <p>コードトランスファイラーであるBabelをフロントエンドのコードベースに統合し、ブラウザ間の互換性と最新のJavaScript機能の使用を可能にします。</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          ソリューションに決済機能を導入します
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 03 - 2020. 06</span>
        </h2>
        <p>既存の無料ソリューションに支払いと追加機能を開発し、ユーザーを獲得しました。</p>
        <p className="mt-2">日本PG社と持続的な疎通、開発に日本語リファレンス文書を活用します</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- クレジットカード、PayPal、コンビニ決済オプションを追加します</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          アドミン専用ページの改善です
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 01 - 2020. 02</span>
        </h2>
        <p>見やすいUIに変更及びエラーが発生しやすかったコードを改善しました。</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-baseline">
            <p className="w-5">-</p>
            <span>AngularJSの$compile関数に大きく依存していたコードをリファクタリングすることで、安定性と速度を大きく向上させました</span>
          </li>
          <li className="text-[#fff] flex items-baseline">
            <p className="w-5">-</p>
            <span>Eメール受信/発信機能を含むソリューション内の新しい問合せ機能を導入しました</span>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          ソリューション商品/注文登録時に一時保存機能を追加
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2019. 06 - 2019. 07</span>
        </h2>
        <p>商品/注文情報の入力中にネットワークの問題によるデータ損失の問題を解決するために、一時保存およびデータ復旧機能を実装しました。</p>
      </div>
    </Wrapper>
  )
}
