import Description from '@/components/description/Description';
import AssociateCompany from '@/components/history/AssociateCompany';
import Experience from '@/components/history/Experience';
import Profile from '@/components/introduction/Profile';
import Link from '@/components/link/Link';
import Skill from '@/components/skill/Skill';
// constants
import { expHistory } from '@/constants/experienctHistory';
import { spHistory } from '@/constants/sideProjectsHistory';
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import AnimateItems from '../animate/AnimateItems';
import Contact from '../contact/Contact';

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  }
};
const OFFSET = 80;

export default function Main() {
  const [scrollIcon, setScrollIcon] = useState<boolean>(true);
  const [currentNav, setCurrentNav] = useState<string>("profile");
  const profileRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const sideProjectsRef = useRef<HTMLDivElement>(null);
  const associateCompanyRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const overComponent = (ref: MutableRefObject<HTMLDivElement>) =>
    ref.current?.getBoundingClientRect().top < OFFSET;

  const handleScroll = () => {
    if (
      !profileRef.current ||
      !skillRef.current ||
      !workExperienceRef ||
      !sideProjectsRef ||
      !associateCompanyRef ||
      !linkRef
    ) return;

    setScrollIcon(false);

    if (overComponent(profileRef)) {
      setCurrentNav('profile');
    }
    if (overComponent(skillRef)) {
      setCurrentNav('skill');
    }
    if (overComponent(workExperienceRef)) {
      setCurrentNav('work-experience');
    }
    if (overComponent(sideProjectsRef)) {
      setCurrentNav('side-projects');
    }
    if (overComponent(associateCompanyRef)) {
      setCurrentNav('associate-company');
    }
    if (overComponent(linkRef)) {
      setCurrentNav('link');
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="resume">
      <aside className="fixed top-24 right-0 p-2 mx-8">
        <nav className="flex-col gap-2 max-w-[200px] hidden ld:flex">
          <ul>
            <li><a href="#profile" className={currentNav === 'profile' ? 'text-gray-light' : ''}>Profile</a></li>
            <li><a href="#skill" className={currentNav === 'skill' ? 'text-gray-light' : ''}>Skill</a></li>
            <li><a href="#work-experience" className={currentNav === 'work-experience' ? 'text-gray-light' : ''}>Work Experience</a></li>
            <li><a href="#side-projects" className={currentNav === 'side-projects' ? 'text-gray-light' : ''}>Side Projects</a></li>
            <li><a href="#associate-company" className={currentNav === 'associate-company' ? 'text-gray-light' : ''}>Associate Company</a></li>
            <li><a href="#link" className={currentNav === 'link' ? 'text-gray-light' : ''}>Link</a></li>
            <li><a href="#contact" className={currentNav === 'contact' ? 'text-gray-light' : ''}>Contact</a></li>
          </ul>
        </nav>
      </aside>
      <div id={'profile'} className={'mx-auto px-4 pb-28 pt-24 sm:max-w-[36rem]'}>
        <div ref={profileRef}>
          <Card>
            <AnimateItems
              duration={0.7}
              staggerDelay={0.1}
              distanceOffset={0}
              staggerOnFirstLoadOnly
              items={[
                <Profile aria-level={2} />,
                <Description aria-level={2} />  
              ]}
            />
          </Card>
        </div>
        <div ref={skillRef}>
          <Card>
            <Skill aria-level={2} />
          </Card>
        </div>
        <div ref={workExperienceRef}>
          <Card>
            <Experience
              id="work-experience"
              aria-level={2}
              head={'Work Experience'}
              history={expHistory}
            />
          </Card>
        </div>
        <div ref={sideProjectsRef}>
          <Card>
            <Experience id="side-projects" aria-level={2} head={'Side Projects'} history={spHistory} />
          </Card>
        </div>
        <div ref={associateCompanyRef}>
          <Card>
            <AssociateCompany />
          </Card>
        </div>
        <div ref={linkRef}>
          <Card>
            <Link aria-level={2} />
          </Card>
        </div>
        <div ref={contactRef}>
          <Card>
            <Contact aria-level={2} />
          </Card>
        </div>
      </div>
      <motion.div animate={scrollIcon ? {
        opacity: 1,
      }: { 
        opacity: 0,
      }} transition={{duration: 1}}>
        <div className="fixed bottom-0 w-full flex justify-center pb-8">
          <motion.div
            animate={{ y: 20 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <IoIosArrowDown color="white" />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

const Card = ({ children } : { children: ReactNode}) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  )
}