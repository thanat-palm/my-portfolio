import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioCard } from './PortfolioCard'
import { childUpVariants, PortfolioVariants } from '@/constants/AnimateVariants'
import { useTranslation } from 'react-i18next'

export function Portfolio() {
  const { t } = useTranslation()
  const [active, setActive] = useState('All')

  const categories = [
    { title: t('categories-all'), value: 'All' },
    { title: t('categories-1'), value: 'Web' },
    { title: t('categories-2'), value: 'Mobile' },
    { title: t('categories-3'), value: 'Design' },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: 'Landing Page',
      category: 'Web',
      image:
        'https://cdn.dribbble.com/userupload/18060197/file/original-7aa360ec7102e8d9cb431d35739d7e38.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center',
    },
    {
      id: 2,
      title: 'Mobile App',
      category: 'Mobile',
      image:
        'https://cdn.dribbble.com/userupload/42451716/file/original-5c0a330e52ea14c68abe2475338c617f.png?format=webp&resize=400x300&vertical=center',
    },
    {
      id: 3,
      title: 'Logo Design',
      category: 'Design',
      image:
        'https://cdn.dribbble.com/userupload/20811320/file/original-28f79681a1d95e55b9827a1a907a8062.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center',
    },
    {
      id: 4,
      title: 'Dashboard UI',
      category: 'Web',
      image:
        'https://cdn.dribbble.com/userupload/17505394/file/original-c7493ca8f98b6ddcfa387646b014a07d.jpg?format=webp&resize=400x300&vertical=center',
    },
  ]

  const filteredItems =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-28">
      <motion.h1
        className="text-7xl sm:text-8xl font-extrabold text-center mb-16 text-primary"
        variants={PortfolioVariants}
        initial="titleOut"
        whileInView="titleIn"
        viewport={{ once: true }}
      >
        {t('portfolio')}
      </motion.h1>

      {/* Filter Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
        variants={PortfolioVariants}
        initial="childOut"
        whileInView="childIn"
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.value}
            variants={childUpVariants}
            onClick={() => setActive(cat.value)}
            className={`rounded-full badge badge-lg sm:badge-xl py-4 px-5 sm:py-6 sm:px-7 text-2xl sm:text-3xl font-medium transition-all ${
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
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard title={item.title} image={item.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
