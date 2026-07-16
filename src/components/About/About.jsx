import './About.css'

const SKILLS = [
  { name: 'HTML', kind: 'warning' },
  { name: 'CSS', kind: 'function' },
  { name: 'JavaScript (ES6+)', kind: 'string' },
  { name: 'ReactJS', kind: 'keyword' },
  { name: 'Git & GitHub', kind: 'error' },
  { name: 'Responsive Design', kind: 'function' },
  { name: 'REST API', kind: 'string' },
  { name: 'UI/UX cơ bản', kind: 'warning' },
]

/**
 * About Me & Skills — đoạn giới thiệu bản thân và danh sách kỹ năng,
 * mỗi kỹ năng được "tô cú pháp" như một token trong trình soạn thảo.
 */
export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-label">02_about-me</span>
        <h2 className="about__heading">Về bản thân</h2>

        <div className="about__grid">
          <p className="about__bio">
            Mình là một Frontend Developer yêu thích việc biến những ý tưởng thiết kế
            thành giao diện thật — mượt mà, dễ dùng và có chủ đích trong từng chi tiết.
            Mình tập trung vào hệ sinh thái React, chú trọng viết code rõ ràng, dễ bảo trì,
            và luôn tìm cách tối ưu trải nghiệm người dùng trên mọi thiết bị. Ngoài giờ code,
            mình thích đọc về kiến trúc phần mềm và thử nghiệm các xu hướng thiết kế mới.
          </p>

          <div className="about__skills">
            <span className="about__skills-label mono">skills.json</span>
            <ul className="skills-list">
              {SKILLS.map((skill) => (
                <li key={skill.name} className={`skill-tag skill-tag--${skill.kind}`}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
