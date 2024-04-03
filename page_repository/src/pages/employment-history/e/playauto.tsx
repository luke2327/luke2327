import Wrapper from "@/components/layout/Wrapper"
import Image from "next/image"

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-6 text-2xl text-[#fff] flex gap-2 items-baseline">
        <Image src="/favicon_playauto.ico" width={32} height={32} alt="playauto" className="self-end" />
        Playauto Inc.
        <span className="text-lg text-[#c8c1bd]">(주식회사 플레이오토)</span>
      </h1>
      <div className="mt-1">
        <p>
        국내 및 일본 온라인 셀러를 위한 전자상거래 통합관리 솔루션을 개발하였습니다.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          솔루션 관리
          <span className="text-sm text-[#c8c1bd]">2019. 08 - 2020. 10</span>
        </h2>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-baseline">
            <p className="w-4">1.</p>
            <span>아래의 AWS서비스를 이용하여 서버를 관리하였습니다.<br />(EC2, ECS, ECR, Route53, CloudFront, Lambda, S3)</span>
          </li>
          <li className="text-[#fff] flex items-baseline">
            <p className="w-8 sm:w-6">2.</p>
            <span>AngularJS 및 Actionhero를 이용하여 유지보수 및 신기능을 도입하고, 반응형 UI를 추가하여 UX를 향상시켰습니다.</span>
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
          테이블 모듈 교체
          <span className="text-sm text-[#c8c1bd]">2020. 09 - 2020. 10</span>
        </h2>
        <p>데이터베이스 효율성 및 안정성 향상을 위해 노후한 테이블 모듈을 교체하였습니다.</p>
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
          배송 서비스 추가
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 07 - 2020. 08</span>
        </h2>
        <p>일본 우체국, FedEx, DHL 이용 고객을 대상으로 갑작스러운 지원 변경에 대응, 신속하게 새로운 기능을 개발하였습니다.</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 신규택배 서비스 추가 : FedEx 9건, DHL 2건</li>
          <li className="text-[#fff]">- 3가지 택배 서비스에 대한 픽업요청 기능 구현</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          솔루션 관리 향상을 위해 Babel 도입
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 05</span>
        </h2>
        <p>코드 트랜스파일러인 Babel을 프론트엔드 코드베이스에 통합하여 브라우저 간 호환성과 최신 자바스크립트 기능 사용을 가능케합니다.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          솔루션에 결제기능 도입
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 03 - 2020. 06</span>
        </h2>
        <p>기존 무료 솔루션에 결제 및 추가기능을 개발하여 사용자를 확보하였습니다.</p>
        <p className="mt-2">보수적이고 까다로운 일본 PG사와 지속적인 소통, 개발에 일본어 레퍼런스 문서를 활용</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- 신용카드, 페이팔, 편의점 결제 옵션 추가</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          어드민전용 페이지 개선
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2020. 01 - 2020. 02</span>
        </h2>
        <p>보기 쉬운 UI로 변경 및 에러가 발생하기 쉬웠던 코드를 개선하였습니다.</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-baseline">
            <p className="w-5">-</p>
            <span>AngularJS의 $compile함수에 크게 의존하던 코드를 리팩토링함으로써 안정성과 속도를 크게 향상시켰습니다</span>
          </li>
          <li className="text-[#fff] flex items-baseline">
            <p className="w-3">-</p>
            <span>이메일 수신/발신 기능을 포함한 솔루션 내의 새로운 문의 기능을 도입했습니다</span>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          솔루션 상품/주문 등록 시 임시저장 기능 추가
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">2019. 06 - 2019. 07</span>
        </h2>
        <p>상품/주문 정보 입력 중 네트워크 문제로 인한 데이터손실 문제를 해결하기 위해 임시저장 및 데이터 복구 기능을 구현했습니다.</p>
      </div>
    </Wrapper>
  )
}
