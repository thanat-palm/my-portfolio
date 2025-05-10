import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioCard } from './PortfolioCard'
import { childUpVariants, PortfolioVariants } from '@/constants/AnimateVariants'


const categories = ['All', 'Web', 'Mobile', 'Design']

const portfolioItems = [
  { id: 1, title: 'Landing Page', category: 'Web', image: 'https://cdn.dribbble.com/userupload/18060197/file/original-7aa360ec7102e8d9cb431d35739d7e38.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center' },
  { id: 2, title: 'Mobile App', category: 'Mobile', image: 'https://cdn.dribbble.com/userupload/42451716/file/original-5c0a330e52ea14c68abe2475338c617f.png?format=webp&resize=400x300&vertical=center' },
  { id: 3, title: 'Logo Design', category: 'Design', image: 'https://cdn.dribbble.com/userupload/20811320/file/original-28f79681a1d95e55b9827a1a907a8062.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center' },
  { id: 4, title: 'Dashboard UI', category: 'Web', image: 'https://cdn.dribbble.com/userupload/17505394/file/original-c7493ca8f98b6ddcfa387646b014a07d.jpg?format=webp&resize=400x300&vertical=center' },
]

export function Portfolio() {
  const [active, setActive] = useState('All')

  const filteredItems =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1 
        className="text-6xl font-bold text-center mb-8 text-primary"
        variants={PortfolioVariants}
        initial="titleOut"
        whileInView="titleIn"
      >My Portfolio</motion.h1>

      {/* Filter Tabs */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-10"
        variants={PortfolioVariants}  
        initial="childOut"
        whileInView="childIn"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            variants={childUpVariants}
            onClick={() => setActive(cat)}
            className={`badge badge-xl rounded-full text-2xl border ${
              active === cat
                ? 'bg-primary text-primary-content'
                : 'bg-base-200 text-base-content border-base-300'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        layout
        variants={PortfolioVariants}
        initial="itemOut"
        whileInView="itemIn"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              whileHover={{scale: 1.02}}
            >
              <PortfolioCard title={item.title} image={item.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

