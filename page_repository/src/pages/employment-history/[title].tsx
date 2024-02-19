
import fs from 'fs';
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import Wrapper from "@/components/layout/Wrapper";
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

type PortfolioProps = {
  title: string;
}

export function getAllPortfolioTitles() {
  const fileNames = fs.readdirSync('./src/components/portfolioDatas');

  return fileNames.map((fileName) => {
    return {
      params: {
        title: fileName.replace(/\.tsx$/, ''),
      },
    };
  });
}

export const getStaticPaths = (() => {
  const paths = getAllPortfolioTitles();

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  }
}) satisfies GetStaticPaths<PortfolioProps>

export const getStaticProps = ({ params }: { params: PortfolioProps}) => {
  return {
    props: params
  }
}

export default function Page({ title }: PortfolioProps) {
  const router = useRouter();
  const DynamicHeader = dynamic(() => import('@/components/portfolioDatas/' + title))
  
  return router.isFallback && DynamicHeader && (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <DynamicHeader />
      </motion.div>
    </Wrapper>
  )
}