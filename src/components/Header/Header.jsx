import { useEffect, useState } from 'react'
import { Sun, Moon, CircleDot } from 'lucide-react'
import './Header.css'

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Header — thanh điều hướng dạng "tab bar" của trình soạn thảo code.
 * - Sticky trên đầu trang khi cuộn.
 * - Tab đang active được xác định bằng useState + lắng nghe sự kiện scroll.
 * - Nút bật/tắt Dark/Light Mode nằm bên phải, giống icon trạng thái của editor.
 */
export default function Header({ theme, onToggleTheme }) {
  const [activeTab, setActiveTab] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)

      const scrollPos = window.scrollY + window.innerHeight * 0.35
      let current = sections[0]?.id
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) current = section.id
      }
      if (current) setActiveTab(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveTab(id)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner container">
        <button
          className="site-header__logo"
          onClick={() => handleTabClick('home')}
          aria-label="Về đầu trang"
        >
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="site-header__logo-text">portfolio.jsx</span>
        </button>

        <nav className="site-header__tabs" aria-label="Điều hướng chính">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'tab--active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {activeTab === tab.id && <CircleDot size={9} className="tab__caret" />}
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </header>
  )
}
