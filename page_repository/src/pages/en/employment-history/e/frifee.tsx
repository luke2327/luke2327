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
        <p>
          Overseas soccer, baseball, basketball score matching, live linking,
          line-up, news, and VOD service in 6 languages respectively.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="flex items-baseline justify-between gap-2 text-xl text-[#fff]">
          Blockchain front-end development using React, Gatsby and ChartJS
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            February 2019 - June 2019
          </span>
        </h2>
        <p>Create EOS dApp site using blockchain system</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">
            - Main 20 page publishing UI development
          </li>
          <li className="text-[#fff]">- AWS RDS, ECS, ECR configurations</li>
          <li className="text-[#fff]">- Site SEO configurations</li>
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
          Soccer transfer market stock site using tymX coin as the main focus
          <span className="whitespace-nowrap text-sm text-[#c8c1bd]">
            June 2018 - January 2019
          </span>
        </h2>
        <p>Participate in projects using Angular, MaterialUI</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- Main and Admin page development</li>
          <li className="text-[#fff]">- I18N (Korean, English)</li>
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
