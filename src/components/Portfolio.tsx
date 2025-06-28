import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioCard } from './PortfolioCard'
import { childUpVariants, PortfolioVariants } from '@/constants/AnimateVariants'
import { useTranslation } from 'react-i18next'
import { portfolioItems } from '@/data/TSdata'

export function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState('All');

  const categories = [
    { title: t('categories-all'), value: 'All' },
    { title: t('categories-1'), value: 'Web' },
    { title: t('categories-2'), value: 'LandingPage' },
    { title: t('categories-3'), value: 'Mobile' },
  ]

  const filteredItems = active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-28">
      <motion.h1
        className="text-7xl sm:text-8xl font-extrabold text-center mb-16 text-primary"
        variants={PortfolioVariants}
        initial="titleOut"
        whileInView="titleIn"
      >
        {t('portfolio')}
      </motion.h1>

      {/* Filter Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
        variants={PortfolioVariants}
        initial="childOut"
        whileInView="childIn"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.value}
            variants={childUpVariants}
            onClick={() => setActive(cat.value)}
            className={`rounded-full badge badge-lg sm:badge-xl py-4 px-5 sm:py-6 sm:px-7 text-2xl sm:text-3xl font-medium ${
              active === cat.value
                ? 'bg-primary text-primary-content border-primary'
                : 'bg-base-200 text-base-content border-base-300'
            }`}
          >
            {cat.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        layout
        variants={PortfolioVariants}
        initial="itemOut"
        whileInView="itemIn"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              whileHover={{ scale: 1.05 }}
            >
              <button className='w-full h-full text-start relative' >
                <PortfolioCard title={item.title} image={item.image} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
