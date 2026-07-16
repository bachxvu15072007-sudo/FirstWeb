import { ArrowRight, Download } from 'lucide-react'
import './Hero.css'

const NAME = 'Vũ Xuân Bách'
const ROLE = 'Frontend Developer'
const STACK = ['React', 'JavaScript', 'CSS']

/**
 * Hero — Giới thiệu chung, trình bày như một khối code đang mở trong editor,
 * có gutter số dòng ở bên trái để gợi nhớ trải nghiệm lập trình.
 */
export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const codeLines = [
    { n: 1, content: <><span className="syn-comment">// portfolio.jsx</span></> },
    { n: 2, content: <><span className="syn-keyword">import</span> {'{ Passion, Curiosity }'} <span className="syn-keyword">from</span> <span className="syn-string">'life'</span></> },
    { n: 3, content: <>&nbsp;</> },
    { n: 4, content: <><span className="syn-keyword">export const</span> <span className="syn-function">developer</span> = {'{'}</> },
    { n: 5, content: <>&nbsp;&nbsp;name: <span className="syn-string">"{NAME}"</span>,</> },
    { n: 6, content: <>&nbsp;&nbsp;role: <span className="syn-string">"{ROLE}"</span>,</> },
    { n: 7, content: <>&nbsp;&nbsp;stack: [{STACK.map((s, i) => (
        <span key={s}>
          <span className="syn-string">"{s}"</span>{i < STACK.length - 1 ? ', ' : ''}
        </span>
      ))}],</> },
    { n: 8, content: <>{'}'};</> },
    { n: 9, content: <>&nbsp;</> },
    { n: 10, content: <><span className="syn-function">render</span>(&lt;<span className="syn-keyword">Hero</span> /&gt;);<span className="caret-blink">▍</span></> },
  ]

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__code">
          <div className="hero__code-topbar">
            <span className="section-label">portfolio.jsx</span>
          </div>
          <div className="hero__code-body">
            <div className="hero__gutter" aria-hidden="true">
              {codeLines.map((l) => (
                <span key={l.n}>{l.n}</span>
              ))}
            </div>
            <pre className="hero__code-content mono">
              {codeLines.map((l) => (
                <div key={l.n} className="code-line">{l.content}</div>
              ))}
            </pre>
          </div>
        </div>

        <div className="hero__content">
          <span className="section-label">01_hero</span>
          <h1 className="hero__title">
            Xin chào, mình là <span className="highlight">{NAME}</span>
          </h1>
          <p className="hero__slogan">
            Mình xây dựng giao diện web sạch, mượt và có chủ đích —
            biến ý tưởng thành sản phẩm thật với React.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Liên hệ ngay <ArrowRight size={16} />
            </button>
            <a className="btn btn-ghost" href="/cv.pdf" download>
              Tải CV <Download size={16} />
            </a>
          </div>

          <div className="hero__avatar-wrap">
            <img
              className="hero__avatar"
              src="/avatar.jpg"
              alt={`Ảnh đại diện của ${NAME}`}
              width="96"
              height="96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
