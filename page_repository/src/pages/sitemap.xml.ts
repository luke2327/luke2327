import { NextApiResponse } from "next";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://resume.maplew.com</loc>
     </url>
     <url>
       <loc>https://resume.maplew.com/employment-history</loc>
     </url>
     <url>
       <loc>https://resume.maplew.com/employment-history/e/eikoline</loc>
     </url>
     <url>
       <loc>https://resume.maplew.com/employment-history/e/linger</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse}) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;