import axios from 'axios'

// Use env base URL if provided, otherwise fall back to current host (works on mobile too)
const defaultBaseURL = (() => {
  if (typeof window === 'undefined') return 'http://localhost:5000/api'
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}:5000/api`
})()

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || defaultBaseURL,
  headers: { 'Content-Type': 'application/json' },
})

// ─── Jobs ─────────────────────────────────────────────
export const jobsApi = {
  getAll: (params) => api.get('/jobs', { params }),
  getById: (id)    => api.get(`/jobs/${id}`),
  create:  (data)  => api.post('/jobs', data),
  delete:  (id)    => api.delete(`/jobs/${id}`),
}

// ─── Applications ─────────────────────────────────────
export const applicationsApi = {
  submit:     (data) => api.post('/applications', data),
  getByJobId: (id)   => api.get(`/jobs/${id}/applications`),
}

export default api