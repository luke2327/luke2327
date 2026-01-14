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
        暗号資産取引プラットホーム構築
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
          2017.12. ~ 2019.06. (18ヶ月)
          </span>
        </h2>
        <p>暗号通貨取引プラットフォームのフロントエンドの開発を担当し、一年後1次的にリリースが完了しました。</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- メインサイトの40ページやバックオフィスシステムの開発を主導</li>
          <li className="text-[#fff]">- 多言語対応(I18N)</li>
          <li className="text-[#fff]">- ストア活用で繰り返されるネットワーク要請を防止</li>
          <li className="text-[#fff]">- テストモジュールを導入し、QA時間を短縮</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex gap-2">
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
        <p>アプリで使用されるデータ管理およびフロントエンドの開発を担当し、データ収集の部分は一人で担当して進めました</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- リアルタイムイシューに対応するニュース生成サービス開発。<br /><p className="pl-3">発行日、著作者などのメタデータとともにMDファイルでニュースを静的生成</p></li>
          <li className="text-[#fff]">- 多言語対応(I18N)</li>
          <li className="text-[#fff]">- 高級クローリングシステム開発<br /><p className="pl-3">400以上のサイト、SNSでSelenium及びScrapyを利用したクロリングシステムを実装した後、AWS Event Bridgeと連結させスケジューリング</p></li>
          <li className="text-[#fff]">- Jpegサイズの最適化導入<br /><p className="pl-3">アプリの初期ロード速度を3秒から1.8秒台に短縮させ、UXを改善</p></li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">活用技術</p>
            <ul className="flex gap-2">
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
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          Development news generation service
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            May 2018 - June 2018
          </span>
        </h2>
        <p>Development of independent news production service using Flask</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - Receive data in input form and generate MD source
          </li>
          <li className="text-[#fff]">
            - Develop post-creation upload, modification, and deletion
            capabilities to AWS S3 storage
          </li>
          <li className="text-[#fff]">- Routing and server configuration</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>Django</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Flask</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          Development admin page of our office
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            April 2018 - May 2018
          </span>
        </h2>
        <p>
          Development an admin page to control the content within the our
          application
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- RDS connection using ORM</li>
          <li className="text-[#fff]">
            - Reduce development time with using Django
          </li>
          <li className="text-[#fff]">
            - Create a bulletin board to receive inconvenience and improve it
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>Django</li>
              <li>ORM</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>AWS RDS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          Development crawling machine used by our company
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            November 2017 - May 2019
          </span>
        </h2>
        <p>Crawled about 400 news and sports sites</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - Use Scrapy module and crawl Webpage, YouTube, Facebook, ...
          </li>
          <li className="text-[#fff]">
            - Pre-Mapping for different sports player names in different
            countries
          </li>
          <li className="text-[#fff]">
            - Optimizing loading speed with (crawled)image resizing
          </li>
          <li className="text-[#fff]">- Scheduling jobs via cron</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Scrapy</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
