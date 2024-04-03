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
          className="self-end invert-[.35]"
        />
        Frifee Inc.
        <span className="text-lg text-[#c8c1bd]">(주식회사 프라이피)</span>
      </h1>
      <div className="mt-1">
        <p>
          해외 축구, 야구, 농구 스코어 매칭, 라이브 링크, 라인업, 뉴스, VOD
          서비스를 각각 6개 언어로 서비스하였으며, tymX코인을 이용하여 dApp을
          개발 하였습니다.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          dApp 사이트 개발
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2019. 02 - 2019. 06
          </span>
        </h2>
        <p>
          tymX코인과 블록체인 기술 및 React, Gatsby, ChartJS 모듈을 사용하여
          dApp을 런칭 하였습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 메인 20페이지 분량 개발</li>
          <li className="text-[#fff]">
            - AWS RDS, ECS, ECR 서비스를 이용하여 배포
          </li>
          <li className="text-[#fff]">- 페이지 SEO 설정</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>ChartJS</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>AWS</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          이적시장 주식 사이트 개발
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2018. 06 - 2019. 01
          </span>
        </h2>
        <p>Angular, MaterialUI 모듈을 이용하여 런칭 하였습니다.</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 메인 40페이지 및 백오피스 개발</li>
          <li className="text-[#fff]">- I18N (한국어, 영어)</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>Django</li>
              <li>Angular</li>
              <li>MaterialUI</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Flask</li>
              <li>ExpressJS</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          뉴스 생성 서비스 개발
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2018. 05 - 2018. 06
          </span>
        </h2>
        <p>
          Flask 를 이용하여 뉴스 생성 서비스를 개발하여, 실시간 이슈에
          대응하였습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 데이터를 입력받아 MD파일로 정적생성</li>
          <li className="text-[#fff]">- 생성(업로드), 수정, 삭제작업 개발</li>
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
          어드민 페이지 개발
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2018. 04 - 2018. 05
          </span>
        </h2>
        <p>서비스중인 콘텐츠를 제어할 수 있는 어드민 페이지 개발 하였습니다.</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- ORM을 통한 RDS 연결</li>
          <li className="text-[#fff]">
            - Django를 이용하여 개발에 필요한 리소스 절약
          </li>
          <li className="text-[#fff]">
            - 불편사항 접수 및 개선을 위한 게시판 제작
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">front-end</p>
            <ul className="flex gap-2">
              <li>Django / ORM</li>
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
          크롤링 머신 개발
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2017. 11 - 2019. 05
          </span>
        </h2>
        <p>
          어플리케이션에서 사용되는 약 400개 가량의 스포츠 사이트의 크롤링
          머신을 개발 하였습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - Scrap 모듈을 이용하여 Webpage, YouTube, Facebook 등 크롤링
          </li>
          <li className="text-[#fff]">
            - 나라마다 각기다른 선수이름을 매칭하는 사전 개발
          </li>
          <li className="text-[#fff]">
            - 크롤링 된 이미지의 리사이징 작업을 통한 최적화
          </li>
          <li className="text-[#fff]">- cron을 통해 작업 스케줄링</li>
        </ul>
        <div className="mt-2">
          <div className="flex gap-2">
            <p className="text-[#fff]">back-end</p>
            <ul className="flex gap-2">
              <li>Scrapy</li>
              <li>Puppeteer</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
