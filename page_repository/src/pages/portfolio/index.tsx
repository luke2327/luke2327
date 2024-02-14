import AnimateItems from "@/components/animate/AnimateItems"

export default function Portfolio() {
  return (
    <main id="portfolio" className={'mx-auto px-4 pb-28 pt-24 sm:max-w-[36rem]'}>
      <section>
        <AnimateItems items={[<h1>Portfolio</h1>]} />
      </section>
    </main>
  );
}