import styled from 'styled-components';

export default function Description() {
  return (
    <DescriptionWrapper aria-label={'introduction'}>
      <DescriptionHeading
        role={'heading'}
        aria-label={'About'}
        className={'description-heading text-xl xs:text-lg'}
      >
        About
      </DescriptionHeading>
      <p>
        GM, Im <span className="text-gray-light">Liam</span><span className="text-xs">(Wonseok Choi)</span>.
      </p>
      <p>
        I enjoy building dynamic, creative products from start to
        finish. Focused on developing intuitive experiences that constantly grow
        and improve based on user metrics. Always shipping.
      </p>
      <p className="mt-4">
        I was interested in <span className="text-gray-light">Big data</span>, so I tried making a crawling machine with a module called Python's Scrapy, and after that,
        I fell in love with NodeJS and decided to dig deep into one well.
        Since then, I've been interested in the superset of JS, <span className="text-gray-light">Typescript</span>,
        so I made it a hobby to convert from JS to TS and naturally Typescript became the default language.
      </p>
      <p className="mt-4">
        I think the vast joy of development is the <span className="text-gray-light">endless limitations of learning</span>,
        from simple codes to tangible codes, multilingual, distribution automation, containers, domain management, serverless, web3, etc.
      </p>
    </DescriptionWrapper>
  );
}

const DescriptionWrapper = styled.div`
  margin-bottom: var(--luke2327-space-14);
  text-wrap: balance;
`;

const DescriptionHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: var(--luke2327-space-2);
`;
