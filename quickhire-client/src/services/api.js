import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api' : 'http://localhost:5000/api'),
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