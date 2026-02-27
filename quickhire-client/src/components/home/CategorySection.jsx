import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal'
import { CATEGORIES, categoryIcon } from '../../utils/helpers'

const categoryColors = [
  'hover:bg-primary-600 hover:text-white hover:border-primary-600',
  'hover:bg-emerald-500 hover:text-white hover:border-emerald-500',
  'hover:bg-amber-500  hover:text-white hover:border-amber-500',
  'hover:bg-sky-500    hover:text-white hover:border-sky-500',
  'hover:bg-purple-500 hover:text-white hover:border-purple-500',
  'hover:bg-orange-500 hover:text-white hover:border-orange-500',
  'hover:bg-rose-500   hover:text-white hover:border-rose-500',
  'hover:bg-teal-500   hover:text-white hover:border-teal-500',
]

const jobCounts = {
  Design: 235, Sales: 756, Marketing: 140, Finance: 325,
  Technology: 436, Engineering: 542, Business: 211, 'Human Resource': 346,
}

const CategorySection = () => {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title">
              Explore by <span>category</span>
            </h2>
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => navigate('/jobs')}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold 
                         text-primary-600 hover:text-primary-700 transition-colors"
            >
              Show all jobs <ArrowRight size={14} />
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <StaggerItem key={cat}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/jobs?category=${cat}`)}
                className={`w-full text-left p-6 rounded-2xl border-2 border-gray-100 
                            bg-white group transition-all duration-300 cursor-pointer
                            ${categoryColors[i % categoryColors.length]}`}
              >
                <span className="text-3xl block mb-3">
                  {categoryIcon[cat] ?? '💼'}
                </span>
                <p className="font-semibold text-dark group-hover:text-white 
                               transition-colors text-sm">
                  {cat}
                </p>
                <p className="text-gray-400 group-hover:text-white/70 text-xs mt-1 
                               transition-colors flex items-center gap-1">
                  {jobCounts[cat] ?? 200} jobs available
                  <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 
                                                    transition-opacity" />
                </p>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile show all */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="sm:hidden mt-8 text-center">
            <button
              onClick={() => navigate('/jobs')}
              className="btn-outline text-sm"
            >
              Show all jobs <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CategorySection