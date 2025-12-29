// Project Status Constants
export const PROJECT_STATUSES = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  CLOSED: 'Closed',
  COMPLETED: 'Completed'
};

// Submission Status Constants
export const SUBMISSION_STATUSES = {
  SUBMITTED: 'Submitted',
  VIEWED: 'Viewed',
  SHORTLISTED: 'Shortlisted',
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
  IN_PROGRESS: 'In Progress',
  NEEDS_UPDATES: 'Needs Updates',
  SUBMITTED_WORK: 'Submitted Work',
  COMPLETED: 'Completed'
};

// Status Colors for consistent styling
export const STATUS_COLORS = {
  // Project statuses
  [PROJECT_STATUSES.OPEN]: 'bg-green-100 text-green-800 border-green-300',
  [PROJECT_STATUSES.IN_PROGRESS]: 'bg-blue-100 text-blue-800 border-blue-300',
  [PROJECT_STATUSES.CLOSED]: 'bg-gray-100 text-gray-800 border-gray-300',
  [PROJECT_STATUSES.COMPLETED]: 'bg-purple-100 text-purple-800 border-purple-300',
  
  // Submission statuses
  [SUBMISSION_STATUSES.SUBMITTED]: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  [SUBMISSION_STATUSES.VIEWED]: 'bg-blue-100 text-blue-800 border-blue-300',
  [SUBMISSION_STATUSES.SHORTLISTED]: 'bg-green-100 text-green-800 border-green-300',
  [SUBMISSION_STATUSES.ACCEPTED]: 'bg-green-100 text-green-800 border-green-300',
  [SUBMISSION_STATUSES.REJECTED]: 'bg-red-100 text-red-800 border-red-300',
  [SUBMISSION_STATUSES.IN_PROGRESS]: 'bg-blue-100 text-blue-800 border-blue-300',
  [SUBMISSION_STATUSES.NEEDS_UPDATES]: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  [SUBMISSION_STATUSES.SUBMITTED_WORK]: 'bg-indigo-100 text-indigo-800 border-indigo-300',
  [SUBMISSION_STATUSES.COMPLETED]: 'bg-purple-100 text-purple-800 border-purple-300'
};

// Status Icons for visual indicators
export const STATUS_ICONS = {
  [PROJECT_STATUSES.OPEN]: '🔓',
  [PROJECT_STATUSES.IN_PROGRESS]: '🔄',
  [PROJECT_STATUSES.CLOSED]: '🔒',
  [PROJECT_STATUSES.COMPLETED]: '✅',
  [SUBMISSION_STATUSES.SUBMITTED]: '📤',
  [SUBMISSION_STATUSES.VIEWED]: '👁️',
  [SUBMISSION_STATUSES.SHORTLISTED]: '⭐',
  [SUBMISSION_STATUSES.ACCEPTED]: '✔️',
  [SUBMISSION_STATUSES.REJECTED]: '❌'
};

// Helper function to get status color classes
export const getStatusColor = (status) => {
  return STATUS_COLORS[status] || 'bg-gray-100 text-gray-800 border-gray-300';
};

// Helper function to get status icon
export const getStatusIcon = (status) => {
  return STATUS_ICONS[status] || '';
};

// Helper function to check if a project status is active
export const isProjectActive = (status) => {
  return status === PROJECT_STATUSES.OPEN || status === PROJECT_STATUSES.IN_PROGRESS;
};

// Helper function to check if a submission status indicates success
export const isSubmissionSuccessful = (status) => {
  return status === SUBMISSION_STATUSES.SHORTLISTED || status === SUBMISSION_STATUSES.ACCEPTED;
};

// Helper function to check if a submission status indicates failure
export const isSubmissionFailed = (status) => {
  return status === SUBMISSION_STATUSES.REJECTED;
};