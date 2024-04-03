import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Wrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <main className={clsx(
      'mx-auto px-4 pb-10 pt-10 sm:max-w-[36rem]',
      className
    )}>
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