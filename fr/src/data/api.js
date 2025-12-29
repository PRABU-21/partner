import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const signup = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

// Embeddings API calls
export const uploadEmbedding = async (fileData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/embeddings/upload-embedding`, fileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

// Jobs API calls
export const getJobs = async () => {
  const response = await api.get('/jobs');
  return response.data.jobs;
};

// Get personalized job recommendations based on resume similarity
export const getJobRecommendations = async (limit = 10) => {
  const response = await api.get(`/jobs/recommendations?limit=${limit}`);
  return response.data.recommendations;
};

// Projects API calls
export const getProjects = async (queryString = '') => {
  const response = await api.get(`/projects${queryString ? `?${queryString}` : ''}`);
  return response.data.data;
};

export const createProject = async (projectData) => {
  const response = await api.post('/projects', projectData);
  return response.data.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data.data;
};

export const updateProject = async (id, projectData) => {
  const response = await api.put(`/projects/${id}`, projectData);
  return response.data.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data.data;
};

export const getMyProjects = async () => {
  const response = await api.get('/projects/my-projects');
  return response.data.data;
};

// Proposals API calls
export const createProposal = async (proposalData) => {
  const response = await api.post('/proposals', proposalData);
  return response.data.data;
};

export const getProposalsByProject = async (projectId) => {
  const response = await api.get(`/proposals/project/${projectId}`);
  return response.data.data;
};

export const getMyProposals = async () => {
  const response = await api.get('/proposals/my-proposals');
  return response.data.data;
};

export const submitProposalWork = async (id, payload) => {
  const response = await api.put(`/proposals/${id}/submit-work`, payload);
  return response.data.data;
};

export const getMyActiveProjects = async () => {
  const response = await api.get('/proposals/my-active-projects');
  return response.data.data;
};

export const updateProposalStatus = async (id, statusData) => {
  const response = await api.put(`/proposals/${id}/status`, statusData);
  return response.data.data;
};

export const getProposalById = async (id) => {
  const response = await api.get(`/proposals/${id}`);
  return response.data.data;
};

// Freelancer Profile API calls
export const getFreelancerProfile = async () => {
  const response = await api.get('/freelancers/profile');
  return response.data.data;
};

export const createFreelancerProfile = async (profileData) => {
  const response = await api.post('/freelancers/profile', profileData);
  return response.data.data;
};

export const updateFreelancerProfile = async (profileData) => {
  const response = await api.put('/freelancers/profile', profileData);
  return response.data.data;
};

export const getFreelancerById = async (id) => {
  const response = await api.get(`/freelancers/${id}`);
  return response.data.data;
};

export const getFreelancers = async (queryString = '') => {
  const response = await api.get(`/freelancers${queryString ? `?${queryString}` : ''}`);
  return response.data.data;
};

export default api;