import styled from 'styled-components';
import { IoIosMore } from "react-icons/io";
import { useState } from 'react';
import { motion } from 'framer-motion'

export default function Description() {
  const [more, setMore] = useState(false);

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
        Since I'm very interested in data,
        I built a <span className="text-gray-light">crawling machine</span> that Sports news of each country using Python's Scrapy module.
        Based on this experience, I was able to create a simple app that provided new news every day,
        which was enough to gather users and stay in the app.
      </p>
      <p className="mt-4">
        I started to connect with <span className="text-gray-light">Javascript</span> because I primarily crawled through the web pages.
        This accidental experience made me interested in the web and I was attracted to Javascript,
        which <span className="text-gray-light">works on any platform</span> where a web browser operates, rather than a mobile application,
        so I decided to become a web front-end and back-end developer.
      </p>
      {
        !more && (
          <div className="gap-2 grid grid-cols-11 my-2">
          <div className="col-span-5" />
          <p
            className="text-gray-light cursor-pointer rounded-3xl border border-solid border-gray-light border-opacity-40 hover:border-opacity-100 flex justify-center items-center"
            onClick={() => setMore(true)}
          >
            <IoIosMore />
          </p>
          <div className="col-span-5" />
        </div>
        )
      }
      <motion.div animate={more ? {
        opacity: 1,
        display: "block"
      }: { 
        opacity: 0,
        display: "none"
      }}>
        <p className="mt-4">
          I was also drawn to Typescript, a superset of JS, and converting JS to TS became a hobby for me,
          making <span className="text-gray-light">Typescript</span> a core programming language I could use.
        </p>
        <p className="mt-4">
          From working with simple coding to typed code, multilingualism, automated deployment,
          container services, domain management, serverless architecture, web assembly,
          <span className="text-gray-light">the never-ending self-improvement</span> is what I love about my work as a developer. 
        </p>
        <p className="mt-4">
          Every day I have a set routine where I spend an hour talking directly to myself using
          the programming language and refactoring the code I've written. After doing this,
          I often find <span className="text-gray-light">new insights</span> in the code I've written in the previous days, and
          this <span className="text-gray-light">constructive habit</span> of seeking sometimes unexpected feedback
          has become a natural part of my life.
        </p>
      </motion.div>
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
