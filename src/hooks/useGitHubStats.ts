import { useState, useEffect } from 'react'

interface GitHubStats {
  repos: number
  stars: number
  loading: boolean
  error: boolean
}

/**
 * Fetches public repo count and total stars for a GitHub user.
 * Uses the public GitHub API — no token needed for public data.
 */
export function useGitHubStats(username: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    stars: 0,
    loading: true,
    error: false,
  })

  useEffect(() => {
    if (!username) return

    async function fetchStats() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        )
        if (!res.ok) throw new Error('GitHub API error')
        const data = await res.json()

        const repos = Array.isArray(data) ? data.length : 0
        const stars = Array.isArray(data)
          ? data.reduce((acc: number, r: { stargazers_count: number }) => acc + r.stargazers_count, 0)
          : 0

        setStats({ repos, stars, loading: false, error: false })
      } catch {
        setStats((prev) => ({ ...prev, loading: false, error: true }))
      }
    }

    fetchStats()
  }, [username])

  return stats
}
