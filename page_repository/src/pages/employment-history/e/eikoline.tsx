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
          국내외 상품에 대해 판매, 재고, 정산, 주문 등을 처리하는 통합 관리
          솔루션을 개발하였습니다.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          API 통합 패키지 구축
          <span className="text-sm text-[#c8c1bd]">
            2023.06. ~ 2024.04. (10개월)
          </span>
        </h2>
        <p>
          사내 공통 API 레이어를 npm 기반의 패키지로 설계·구현하고, API 통신
          구조를 표준화하여 중복 로직을 제거하였습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              API 변경 시 단일 라이브러리 업데이트로 모든 서비스의 동기화 구조를
              구축
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              API 요청/응답 타입을 서버-클라이언트 간 E2E 타입으로 설정
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>CI 환경에서 라이브러리 테스트 자동화</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            - API 사용 가이드 및 문서화를 주도
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
            <ul className="flex gap-2">
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
          EC 사이트 통합 관리 플랫폼 구축
          <span className="text-sm text-[#c8c1bd]">
            2021.04. ~ 2024.06. (38개월)
          </span>
        </h2>
        <p>
          일본과 한국의 전자상거래 플랫폼을 통합 관리하는 솔루션을
          구축하였습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>입출고, 배송, 재고, 발주 관리 시스템 구축</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>EC 사이트 API 연동</span>
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
            <span>EC 사이트 스크래핑</span>
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
              API 인터페이스를 DTO로 체계화하여 데이터 흐름의 가시성을
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              SNS(LINE, Kakao) 알람을 연동해 CS 직원의 업무 효율을 향상
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              SQS와 SNS를 도입함으로써 주문·결제·배송 이벤트를 비동기 처리해
              서비스 간 결합도를 낮추고 장애 전파를 방지
            </span>
          </li>
          <li className="text-[#fff]">
            - NestJS와 Drizzle ORM의 조합
            <p className="flex pl-1">
              <TbChevronDownLeft />
              DB 스키마에 기반한 타입 안전 쿼리를 구성해 런타임 SQL 오류를
              사전에 방지
            </p>
          </li>
          <li className="flex items-center text-[#fff]">
            - Javascript <MdKeyboardArrowRight /> Typescript 마이그레이션
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
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
          해외 및 국내 배송 관리 플랫홈 구축
          <span className="text-sm text-[#c8c1bd]">
            2019.06. ~ 2023.03. (44개월)
          </span>
        </h2>
        <p>
          일본 및 한국의 배송업체와 협력해 라벨 출력, 발송, 반송 등 서비스를
          제공하는 시스템을 구축했습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              국내외 배송업체와 연동(UPS, EMS, DHL, FedEx, qExpress, JPPost 등)
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>다국어지원(I18N)</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>API를 제공하지 않는 배송 회사의 라벨 출력 시스템 제작</span>
          </li>
          <li className="text-[#fff]">
            - Typescript로의 전환을 추진
            <p className="flex pl-1">
              <TbChevronDownLeft />
              런타임 전 오류를 찾아내어 업무 효율을 향상
            </p>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              ECS 기반 자동 스케일링을 통해 배송 처리 피크 트래픽을 안정적으로
              흡수하고, 처리량을 2배 이상 개선했습니다
            </span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
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
