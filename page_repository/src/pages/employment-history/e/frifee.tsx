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
        <p>스포츠 미디어 관리 플랫폼 구축</p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          암호화폐 거래 플랫폼 구축
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2017.12. ~ 2019.06. (18개월)
          </span>
        </h2>
        <p>
          암호화폐 거래 플랫폼의 프론트엔드 개발을 담당하였으며, 1년 후 1차
          릴리스가 완료되었습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - 메인 사이트 40페이지와 백오피스 시스템 개발을 주도
          </li>
          <li className="text-[#fff]">- 多言語対応(I18N)</li>
          <li className="text-[#fff]">
            - 스토어 활용 시 반복되는 네트워크 요청을 방지
          </li>
          <li className="text-[#fff]">
            - 테스트 모듈을 도입하여 QA 시간을 단축
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
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
          스포츠 미디어 관리 플랫폼 구축
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            2017.10. ~ 2019.01. (15개월)
          </span>
        </h2>
        <p>
          앱에서 사용되는 데이터 관리와 프론트엔드 개발을 담당하였으며, 데이터
          수집 부분은 혼자서 담당하여 진행하였습니다
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - 실시간 이슈에 대응하는 뉴스 생성 서비스 개발
            <br />
            <p className="pl-3">
              발행일, 저작자 등의 메타데이터와 함께 MD 파일로 뉴스를 정적으로
              생성
            </p>
          </li>
          <li className="text-[#fff]">- 다국어지원(I18N)</li>
          <li className="text-[#fff]">
            - 고급 크롤링 시스템 개발
            <br />
            <p className="pl-3">
              400개 이상의 사이트와 SNS에서 Selenium 및 Scrapy를 이용한 크롤링
              시스템을 구현한 후, AWS Event Bridge와 연결하여 스케줄링
            </p>
          </li>
          <li className="text-[#fff]">
            - JPEG 사이즈 최적화 도입
            <br />
            <p className="pl-3">
              앱의 초기 로드 속도를 3초에서 1.8초대로 단축하여 UX를
              개선하였습니다
            </p>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
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
