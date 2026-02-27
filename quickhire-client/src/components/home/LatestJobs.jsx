import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal'
import JobCard from '../common/JobCard'
import { jobsApi } from '../../services/api'

const LatestJobs = () => {
  const [jobs,    setJobs]    = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    jobsApi.getAll()
      .then(res => {
        const data = res.data?.data ?? []
        setJobs(data.slice(0, 4))
      })
      .catch(error => {
        console.error('Failed to load latest jobs', error)
        setJobs([])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal variant="fadeUp">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-dark">
              Latest <span className="text-accent">jobs open</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobs.map(job => (
              <StaggerItem key={job.id}>
                <JobCard job={job} variant="list" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="text-center mt-10">
            <button onClick={() => navigate('/jobs')} className="btn-primary">
              Show all jobs <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default LatestJobs