/**
 * GitHub API Utility
 * Fetches real project data from GitHub
 */

const GITHUB_USERNAME = 'Kanishkavijay39';
const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetch all repositories for a user
 * Filters out forks and portfolio repo itself
 * @returns {Promise<Array>} Array of repository objects
 */
export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Filter: Only show original repositories (NOT forks) and exclude portfolio repo
    const filteredRepos = repos
      .filter(repo => {
        // Exclude forked repositories
        if (repo.fork) {
          return false;
        }
        // Exclude the portfolio repository itself
        if (repo.name === 'portfolio') {
          return false;
        }
        return true;
      })
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        url: repo.html_url,
        language: repo.language || 'Other',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        homepage: repo.homepage
      }))
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 6); // Get top 6 most recent projects
    
    console.log(`Found ${filteredRepos.length} original (non-forked) repositories`);
    
    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Fetch languages used in a repository
 * @param {string} repoName - Repository name
 * @returns {Promise<Object>} Object with language percentages
 */
export const fetchRepoLanguages = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`);
    
    if (!response.ok) {
      return {};
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error);
    return {};
  }
};

/**
 * Get top languages from languages object
 * @param {Object} languages - Languages object from GitHub API
 * @returns {Array<string>} Array of top language names
 */
export const getTopLanguages = (languages) => {
  if (!languages || Object.keys(languages).length === 0) {
    return [];
  }
  
  const total = Object.values(languages).reduce((sum, val) => sum + val, 0);
  const sorted = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([lang]) => lang);
  
  return sorted;
};

