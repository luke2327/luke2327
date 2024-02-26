import Wrapper from "@/components/layout/Wrapper"

export default function PortfolioData() {
  return (
    <Wrapper>
      <h1 className="pt-4 text-2xl text-[#fff] flex gap-2 items-baseline">
        Playauto Inc.
      </h1>
      <div className="mt-1">
        <p>
        Integrating e-commerce platforms, managing orders and inventory, and developing solutions for label printing and shipping cost calculations.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Management of the solution's server
          <span className="text-sm text-[#c8c1bd]">2019. 08 - 2020. 10</span>
        </h2>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-baseline">
            <p className="w-8">1.</p>
            <span>Managing servers primarily using AWS services such as EC2, ECS, ECR, Route53, CloudFront, Lambda, and S3.</span>
          </li>
          <li className="text-[#fff] flex items-baseline">
            <p className="w-8">2.</p>
            <span>Performed routine maintenance and updates to web applications using AngularJS, ensuring high performance and responsiveness.</span>
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
          Replacing Table Modules
          <span className="text-sm text-[#c8c1bd]">2020. 09 - 2020. 10</span>
        </h2>
        <p>Led the table module replacement project to enhance database efficiency and reliability.</p>
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
          New Feature Development for Delivery Solution Company
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">July 2020 - August 2020</span>
        </h2>
        <p>Rapidly developed new functionalities in response to sudden support changes by FedEx and DHL for clients using JPPOST (EMS), FedEx, and DHL in Japan.</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- Added new courier delivery services: 9 for FedEx and 2 for DHL</li>
          <li className="text-[#fff]">- Implemented pick-up request features for all three courier services</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Frontend Development: Babel Implementation for Solution and Admin Interfaces
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">May 2020</span>
        </h2>
        <p>Integrated Babel, a code transpiler, into the frontend codebase to enhance cross-browser compatibility and modern JavaScript features usage.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Payment Feature Development for Solution Platform
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">March 2020 - June 2020</span>
        </h2>
        <p>Developed and integrated payment functionalities and additional features into a previously free solution, significantly increasing user acquisition.</p>
        <p className="mt-2">Maintained continuous communication with conservative and demanding Japanese payment gateway providers, utilizing Japanese-language reference documents for development</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff]">- Add Credit Card, PayPal, and Convenience Store Payment Options</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          New Development of Solution Admin Panel
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">January 2020 - February 2020</span>
        </h2>
        <p>Revamped the outdated and error-prone admin panel with a modernized design and architecture.</p>
        <ul className="mt-2 flex flex-col gap-0.5">
          <li className="text-[#fff] flex items-baseline">
            <p className="w-5">-</p>
            <span>Significantly improved code efficiency and speed by refactoring code that heavily relied on AngularJS’s $compile</span>
          </li>
          <li className="text-[#fff] flex items-baseline">
            <p className="w-5">-</p>
            <span>Introduced a new inquiry feature within the solution, including email communication capabilities</span>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#fff] flex gap-2 items-baseline">
          Development of Autosave Feature for E-commerce Solution
          <span className="text-sm text-[#c8c1bd] whitespace-nowrap">June 2019 - July 2019</span>
        </h2>
        <p>Implemented an autosave and data recovery feature to address issues of data loss due to internet disruptions during information entry in the e-commerce solution.</p>
      </div>
    </Wrapper>
  )
}
