import axios from "axios";

// In production we should NOT guess ports.
// Use env variable if provided, otherwise fall back to same-origin `/api`.
const baseURL = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── Jobs ─────────────────────────────────────────────
export const jobsApi = {
  getAll: (params) => api.get("/jobs", { params }),
  getById: (id)    => api.get(`/jobs/${id}`),
  create:  (data)  => api.post("/jobs", data),
  delete:  (id)    => api.delete(`/jobs/${id}`),
};

// ─── Applications ─────────────────────────────────────
export const applicationsApi = {
  submit:     (data) => api.post("/applications", data),
  getByJobId: (id)   => api.get(`/jobs/${id}/applications`),
};

export default api;