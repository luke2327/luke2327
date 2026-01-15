import Wrapper from '@/components/layout/Wrapper';
import Image from 'next/image';

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="flex items-baseline gap-2 pt-6 text-2xl text-[#fff]">
        <Image
          src="/favicon_frifee.png"
          width={32}
          height={32}
          alt="frifee"
          className="self-end"
        />
        Frifee Inc.
      </h1>
      <div className="mt-1">
        <p>スポーツメディア管理プラットホーム構築</p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          暗号通貨取引プラットホーム構築
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2017.12. ~ 2019.06. (18ヶ月)
          </span>
        </h2>
        <p>
          暗号通貨取引プラットフォームのフロントエンドの開発を担当し、一年後1次的にリリースが完了しました。
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - メインサイトの40ページやバックオフィスシステムの開発を主導
          </li>
          <li className="text-[#fff]">- 多言語対応(I18N)</li>
          <li className="text-[#fff]">
            - ストア活用で繰り返されるネットワーク要請を防止
          </li>
          <li className="text-[#fff]">
            - テストモジュールを導入し、QA時間を短縮
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex flex-wrap gap-2">
              <li>React</li>
              <li>Gatsby</li>
              <li>MobX</li>
              <li>ChartJS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          スポーツメディア管理プラットホーム構築
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2017.10. ~ 2019.01. (15ヶ月)
          </span>
        </h2>
        <p>
          アプリで使用されるデータ管理およびフロントエンドの開発を担当し、データ収集の部分は一人で担当して進めました
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - リアルタイムイシューに対応するニュース生成サービス開発
            <br />
            <p className="pl-3">
              発行日、著作者などのメタデータとともにMDファイルでニュースを静的生成
            </p>
          </li>
          <li className="text-[#fff]">- 多言語対応(I18N)</li>
          <li className="text-[#fff]">
            - 高級クローリングシステム開発
            <br />
            <p className="pl-3">
              400以上のサイト、SNSでSelenium及びScrapyを利用したクロリングシステムを実装した後、AWS
              Event Bridgeと連結させスケジューリング
            </p>
          </li>
          <li className="text-[#fff]">
            - Jpegサイズの最適化導入
            <br />
            <p className="pl-3">
              アプリの初期ロード速度を3秒から1.8秒台に短縮させ、UXを改善
            </p>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex flex-wrap gap-2">
              <li>React</li>
              <li>MobX</li>
              <li>ChartJS</li>
              <li>MaterialUI</li>
              <li>Nginx</li>
              <li>Scrapy</li>
              <li>Flask</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
