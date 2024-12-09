const API_BASE_URL = "https://chatbotcv-t5h0c8cj.b4a.run"; // Replace with your base URL

const apiUrls = {
  login: `${API_BASE_URL}/login/`,
  signup: `${API_BASE_URL}/signup/`,
  entry_to_gpt: `${API_BASE_URL}/entry_to_gpt/`,
  upload_pdf: `${API_BASE_URL}/upload_pdf/`,
  view_journal: `${API_BASE_URL}/view_journal/`,
  record_entry: `${API_BASE_URL}/record_entry/`,
  generate_cv: `${API_BASE_URL}/generate_cv/`,
  generate_appraisal_report: `${API_BASE_URL}/generate_cv/`,

  deletePost: (postId) => `${API_BASE_URL}/posts/${postId}`, // Dynamic URL example
};

export default apiUrls;