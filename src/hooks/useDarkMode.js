import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/**
 * useDarkMode
 * Quản lý trạng thái Sáng/Tối (Dark/Light) của toàn trang.
 * - Đọc theme đã lưu trong localStorage khi tải trang (hoặc theo prefers-color-scheme).
 * - Ghi lại theme vào localStorage mỗi khi người dùng đổi, để giữ nguyên khi reload.
 */
export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
