import { motion } from 'framer-motion'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className={'mx-auto px-4 pb-10 pt-10 sm:max-w-[36rem]'}>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </section>
    </main>
  )
}