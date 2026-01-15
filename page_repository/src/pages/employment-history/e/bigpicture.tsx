import Wrapper from '@/components/layout/Wrapper';
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
        <p>PC방 관리 프로그램 및 사용자 앱 개발을 담당하고 있습니다.</p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline gap-2 text-xl text-[#fff]">
          컴포넌트 통합 패키지 구축
          <span className="text-sm text-[#c8c1bd]">
            2024.08. ~ 현재 (17개월)
          </span>
        </h2>
        <p>
          React 기반 디자인 시스템 및 컴포넌트 라이브러리의 패키지를 구축하고
          npm에 배포했습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>Framer Motion 기반 공통 애니메이션 인터랙션 레이어 구축</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              분산되어 관리되던 공통 UI 컴포넌트를 중앙화하고, UI 변경을 하나의
              지점에서 관리할 수 있는 구조로 개선
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              스토리북 기반 컴포넌트 문서화를 통해 디자이너와 개발자 간의
              커뮤니케이션 비용을 절감
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              npm 패키지 배포와 버전 관리 전략을 통해 장기 운영 구조를 구축
            </span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
            <ul className="flex flex-wrap gap-2">
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
          데스크톱 애플리케이션 구축
          <span className="text-sm text-[#c8c1bd]">
            2024.06. ~ 현재 (19개월)
          </span>
        </h2>
        <p>
          게임에 필요한 정보와 부수적인 정보를 제공하는 데스크톱 애플리케이션을
          구축했습니다.
        </p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              IPC Main과 Renderer 사이의 API를 제네레이터로 만들어 일관성을 유지
            </span>
          </li>
          <li className="text-[#fff]">
            - Promise 기반 명령형 코드를 RxJS 파이프라인으로 리팩터링
            <p className="flex pl-1">
              <TbChevronDownLeft />
              이벤트 리스너와 비동기 로직의 코드 라인(LOC)을 약 40% 단축
            </p>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>오류 처리 로직을 중앙화함으로써 디버깅 시간을 단축</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              DTO 표준화를 통해 API 간 타입 불일치 오류를 조기에 발견할 수
              있도록 구축
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>
              미니게임과 보상 획득 시 시각 효과(애니메이션)를 구현해 딱딱한 UX를
              개선
            </span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>다국어지원(I18N)</span>
          </li>
          <li className="flex gap-1 text-[#fff]">
            <span>-</span>
            <span>게임 커뮤니티 구축</span>
          </li>
        </ul>
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#fff]">활용기술</p>
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
