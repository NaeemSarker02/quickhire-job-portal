import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal'
import { SkeletonCard } from '../common/Loader'
import JobCard from '../common/JobCard'
import { jobsApi } from '../../services/api'

const FeaturedJobs = () => {
  const [jobs,    setJobs]    = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    jobsApi.getAll({ limit: 8 })
      .then(res => setJobs(res.data.data?.slice(0, 8) ?? []))
      .catch(() => setJobs([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal variant="fadeUp">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title">
              Featured <span>jobs</span>
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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : jobs.length === 0 ? (
          <ScrollReveal variant="fadeUp">
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-4">💼</p>
              <p className="font-medium">No jobs available yet</p>
              <p className="text-sm mt-2">Check back soon or post a job as admin</p>
            </div>
          </ScrollReveal>
        ) : (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {jobs.map(job => (
              <StaggerItem key={job.id}>
                <JobCard job={job} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="text-center mt-10">
            <button onClick={() => navigate('/jobs')} className="btn-outline">
              Show all jobs <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FeaturedJobs