import { motion } from 'framer-motion'
import { MapPin, Clock, Bookmark } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getTagClass, getCompanyColor, timeAgo } from '../../utils/helpers'

const JobCard = ({ job, variant = 'default' }) => {
  const initials = job.company?.slice(0, 2).toUpperCase() || 'JB'
  const bgColor  = getCompanyColor(job.company || '')

  if (variant === 'list') {
    return (
      <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
        <Link
          to={`/jobs/${job.id}`}
          className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 
                     bg-white hover:border-primary-200 hover:shadow-card 
                     transition-all duration-300 group"
        >
          {/* Logo */}
          <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center 
                          text-white font-bold text-sm flex-shrink-0`}>
            {initials}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-dark text-sm group-hover:text-primary-600 
                          transition-colors truncate">
              {job.title}
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
              {job.company}
              <span className="text-gray-300">•</span>
              <MapPin size={10} />
              {job.location}
            </p>
          </div>

          {/* Tags */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <span className={`tag ${getTagClass(job.type || 'Full-time')}`}>
              {job.type || 'Full-time'}
            </span>
            {job.category && (
              <span className={`tag ${getTagClass(job.category)}`}>{job.category}</span>
            )}
          </div>

          {/* Time */}
          <span className="hidden md:block text-xs text-gray-400 flex-shrink-0 ml-2">
            {timeAgo(job.created_at)}
          </span>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Link
        to={`/jobs/${job.id}`}
        className="card flex flex-col gap-4 group cursor-pointer block"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center 
                            text-white font-bold text-sm`}>
              {initials}
            </div>
            <div>
              <h3 className="font-semibold text-dark group-hover:text-primary-600 
                             transition-colors text-sm leading-tight">
                {job.title}
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">{job.company}</p>
            </div>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center 
                       justify-center hover:border-primary-300 hover:text-primary-600 
                       transition-colors text-gray-400"
          >
            <Bookmark size={14} />
          </button>
        </div>

        {/* Description */}
        {job.description && (
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
            {job.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            <span className={`tag ${getTagClass(job.type || 'Full-time')}`}>
              {job.type || 'Full-time'}
            </span>
            {job.category && (
              <span className={`tag ${getTagClass(job.category)}`}>{job.category}</span>
            )}
          </div>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Clock size={10} />
            {timeAgo(job.created_at)}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default JobCard