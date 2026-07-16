import { Github, Linkedin, Mail, GitBranch, Check } from 'lucide-react'
import './Footer.css'

/**
 * Footer — được thiết kế như thanh trạng thái (status bar) của trình soạn thảo code,
 * chứa thông tin bản quyền và các liên kết mạng xã hội.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="status-bar">
      <div className="container status-bar__inner">
        <div className="status-bar__left">
          <span className="status-bar__item">
            <GitBranch size={13} /> main
          </span>
          <span className="status-bar__item">
            <Check size={13} /> no problems
          </span>
        </div>

        <span className="status-bar__center mono">
          © {year} — Xây dựng bằng React &amp; Vite
        </span>

        <div className="status-bar__right">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <Mail size={15} />
          </a>
          <span className="status-bar__item status-bar__encoding">UTF-8</span>
        </div>
      </div>
    </footer>
  )
}
