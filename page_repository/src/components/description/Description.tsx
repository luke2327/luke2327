import styled from 'styled-components';
import { IoIosMore } from 'react-icons/io';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SupportedLanguage } from '@/constants/AppConfig';

type DescriptionProps = {
  more: boolean;
  setMore: (value: boolean) => void;
};

export default function Description({
  language,
}: {
  language: SupportedLanguage;
}) {
  const [more, setMore] = useState(false);
  const font =
    language === 'ko'
      ? 'font-nanum'
      : language === 'en'
      ? 'font-sans'
      : 'font-sans';

  if (language === 'ko') {
    return (
      <DescriptionWrapper>
        <KoreanDescription more={more} setMore={setMore} />
      </DescriptionWrapper>
    );
  } else if (language === 'en') {
    return (
      <DescriptionWrapperEn aria-label={'introduction'} className={font}>
        <EnglishDescription more={more} setMore={setMore} />
      </DescriptionWrapperEn>
    );
  } else {
    return (
      <DescriptionWrapper aria-label={'introduction'} className={font}>
        <JapaneseDescription more={more} setMore={setMore} />
      </DescriptionWrapper>
    );
  }
}

const EnglishDescription = ({ more, setMore }: DescriptionProps) => {
  return (
    <>
      <DescriptionHeading
        role={'heading'}
        aria-label={'About'}
        className={'description-heading text-xl xs:text-lg'}
      >
        About
      </DescriptionHeading>
      <p>
        GM, Im <span className="text-gray-light">Liam</span>
        <span className="text-xs">(Wonseok Choi)</span>.
      </p>
      <p>
        Since I'm very interested in data, I built a{' '}
        <span className="text-gray-light">crawling machine</span> that Sports
        news of each country using Python's Scrapy module. Based on this
        experience, I was able to create a simple app that provided new news
        every day, which was enough to gather users and stay in the app.
      </p>
      <p className="mt-4">
        I started to connect with{' '}
        <span className="text-gray-light">Javascript</span> because I primarily
        crawled through the web pages. This accidental experience made me
        interested in the web and I was attracted to Javascript, which{' '}
        <span className="text-gray-light">works on any platform</span> where a
        web browser operates, rather than a mobile application, so I decided to
        become a web front-end and back-end developer.
      </p>
      {!more && (
        <div className="my-2 grid grid-cols-11 gap-2">
          <div className="col-span-5" />
          <p
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-solid border-gray-light border-opacity-40 text-gray-light hover:border-opacity-100"
            onClick={() => setMore(true)}
          >
            <IoIosMore />
          </p>
          <div className="col-span-5" />
        </div>
      )}
      <motion.div
        animate={
          more
            ? {
                opacity: 1,
                display: 'block',
              }
            : {
                opacity: 0,
                display: 'none',
              }
        }
      >
        <p className="mt-4">
          I was also drawn to Typescript, a superset of JS, and converting JS to
          TS became a hobby for me, making{' '}
          <span className="text-gray-light">Typescript</span> a core programming
          language I could use.
        </p>
        <p className="mt-4">
          From working with simple coding to typed code, multilingualism,
          automated deployment, container services, domain management,
          serverless architecture, web assembly,
          <span className="text-gray-light">
            the never-ending self-improvement
          </span>{' '}
          is what I love about my work as a developer.
        </p>
        <p className="mt-4">
          Every day I have a set routine where I spend an hour talking directly
          to myself using the programming language and refactoring the code I've
          written. After doing this, I often find{' '}
          <span className="text-gray-light">new insights</span> in the code I've
          written in the previous days, and this{' '}
          <span className="text-gray-light">constructive habit</span> of seeking
          sometimes unexpected feedback has become a natural part of my life.
        </p>
      </motion.div>
    </>
  );
};

const KoreanDescription = ({ more, setMore }: DescriptionProps) => {
  return (
    <>
      <DescriptionHeading
        role={'heading'}
        aria-label={'About'}
        className={'description-heading text-xl xs:text-lg'}
      >
        About
      </DescriptionHeading>
      <p>
        안녕하세요 저는 <span className="text-gray-light">최원석</span>
        이라고 합니다.
      </p>
      <p>
        저는 데이터에 관심이 많아서, 파이썬의{' '}
        <span className="group cursor-pointer text-gray-light">
          Scrapy
          <span className="absolute ml-2 rounded-sm border border-gray bg-[#272527] p-2 opacity-0 transition-opacity group-hover:opacity-100 lg:-right-[30%] lg:ml-0">
            <span className="flex gap-2 underline underline-offset-2">
              Scrapy
            </span>
            <span className="mt-2 flex">웹 크롤링 모듈입니다.</span>
          </span>
        </span>
        &nbsp;모듈을 이용하여 각국의 스포츠 뉴스를 다루는{' '}
        <span className="text-gray-light">크롤링 머신</span>을 만들었습니다. 이
        경험을 바탕으로 매일 새로윤 뉴스 컨텐츠를 제공하는 앱을 만들 수
        있었는데, 이는 사용자를 모으고 앱에 머무르게 하는 데 충분했습니다.
        이것이 제 개발여정의 시작입니다.
      </p>
      <p className="mt-4">
        주로 웹 페이지를 크롤링하며{' '}
        <span className="text-gray-light">Javascript</span> 를 접하게
        되었습니다. 이 우연한 경험으로 웹에 흥미를 갖게 되었고, 모바일
        애플리케이션이 아닌 웹브라우저가 작동하는 모든 플랫폼에서 작동되는
        Javascript에 매료되어 웹 프론트엔드 및 백엔드 개발자가 되기로
        결심했습니다.
      </p>
      {!more && (
        <div className="my-2 grid grid-cols-11 gap-2">
          <div className="col-span-5" />
          <p
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-solid border-gray-light border-opacity-40 text-gray-light hover:border-opacity-100"
            onClick={() => setMore(true)}
          >
            <IoIosMore />
          </p>
          <div className="col-span-5" />
        </div>
      )}
      <motion.div
        animate={
          more
            ? {
                opacity: 1,
                display: 'block',
              }
            : {
                opacity: 0,
                display: 'none',
              }
        }
      >
        <p className="mt-4">
          그리고 Javascript의 슈퍼셋인 Typescript에도 매료되었고 JS를 TS로
          변환하는것이 하나의 취미가 되어
          <span className="text-gray-light">Typescript</span>는 제가 사용할 수
          있는 핵심 프로그래밍 언어로 자리잡았습니다.
        </p>
        <p className="mt-4">
          간단한 코드부터, 타이핑된 코드, 다국어, 자동화 배포, 컨테이너 서비스,
          도메인관리, 서버리스 아키텍처, 웹 어셈블리와 같이 무한한 개발의 세계,
          그것을 통해 <span className="text-gray-light">끝없는 자기계발</span>이
          개발자로서의 일을 사랑하게 만들었습니다.
        </p>
        <p className="mt-4">
          매일 코딩을 하여 직접 나 자신과 대화하고 제가 작성한 코드를
          리팩토링하는 시간을 가지고 있습니다. 이것을 통해 이전날 작성한
          코드에서&nbsp;
          <span className="text-gray-light">새로운 통찰</span>을 발견하고,
          때로는 예상치 못한 피드백을 찾는 이{' '}
          <span className="text-gray-light">건설적인 습관</span>은 제 삶의
          자연스러운 부분이 되었습니다.
        </p>
      </motion.div>
    </>
  );
};

const JapaneseDescription = ({ more, setMore }: DescriptionProps) => {
  return (
    <>
      <DescriptionHeading
        role={'heading'}
        aria-label={'About'}
        className={'description-heading text-xl xs:text-lg'}
      >
        About
      </DescriptionHeading>
      <p>
        こんにちは私は <span className="text-gray-light">Liam</span>
        <span className="text-xs">(Wonseok Choi)</span> と申します.
      </p>
      <p>
        私はデータに興味がありますので、パイソンの{' '}
        <span className="group cursor-pointer text-gray-light">
          Scrapy
          <span className="absolute ml-2 rounded-sm border border-gray bg-[#272527] p-2 opacity-0 transition-opacity group-hover:opacity-100 lg:-right-[30%] lg:ml-0">
            <span className="flex gap-2 underline underline-offset-2">
              Scrapy（スクラピー）
            </span>
            <span className="mt-2 flex">ウェブクロリングモジュールです</span>
          </span>
        </span>
        &nbsp;モジュールを利用して各国のスポーツニュースを扱う{' '}
        <span className="text-gray-light">クローリングマシン</span>
        を作りました。
        この経験をもとに、毎日新しいユンニュースコンテンツを提供するアプリを作ることができましたが、これはユーザーを集め、アプリに留まらせるのに十分でした。
        これが私の開発旅程の始まりです。
      </p>
      <p className="mt-4">
        主にウェブページをクリックして{' '}
        <span className="text-gray-light">Javascript</span>{' '}
        を使うようになりました。
        この偶然な経験からウェブに興味を持つようになりましたし、
        モバイルアプリケーションではなく、Webブラウザが動作するすべてのプラットフォームで動作するJavascriptに魅了され、Webフロントエンドおよびバックエンド開発者になることを決意しました。
      </p>
      {!more && (
        <div className="my-2 grid grid-cols-11 gap-2">
          <div className="col-span-5" />
          <p
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-solid border-gray-light border-opacity-40 text-gray-light hover:border-opacity-100"
            onClick={() => setMore(true)}
          >
            <IoIosMore />
          </p>
          <div className="col-span-5" />
        </div>
      )}
      <motion.div
        animate={
          more
            ? {
                opacity: 1,
                display: 'block',
              }
            : {
                opacity: 0,
                display: 'none',
              }
        }
      >
        <p className="mt-4">
          そしてJavascriptのスーパーセットであるTypescriptにも魅了されましたし、JSをTSに変換することが趣味になります。
          <span className="text-gray-light">Typescript</span>
          は私が使用できる核心プログラミング言語として位置づけられています。
        </p>
        <p className="mt-4">
          簡単なコードから、タイピングされたコード、多言語、自動化配布、コンテナサービス、ドメイン管理、サーバーレスアーキテクチャ、ウェブアセンブリといった無限の開発の世界、
          それにより、
          <span className="text-gray-light">終わりのない自己啓発</span>
          が開発者としての仕事を愛するようになりました。
        </p>
        <p className="mt-4">
          毎日コーディングをして自分自身と直接対話し、自分が作成したコードをリファクタリングする時間を持っています。
          これにより、以前作成したコードから&nbsp;
          <span className="text-gray-light">新しい洞察</span>
          を発見し、時には予期しないフィードバックを見つけるこの
          <span className="text-gray-light">建設的な習慣</span>は
          私の人生の自然な部分になりました。
        </p>
      </motion.div>
    </>
  );
};

const DescriptionWrapperEn = styled.div`
  margin-bottom: var(--luke2327-space-14);
  text-wrap: balance;
`;

const DescriptionWrapper = styled.div`
  margin-bottom: var(--luke2327-space-14);
`;

const DescriptionHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: var(--luke2327-space-2);
`;
