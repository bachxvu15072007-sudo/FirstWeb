import { Github, ExternalLink } from 'lucide-react'

/**
 * ProjectCard — hiển thị một dự án dưới dạng "file tile":
 * ảnh, tiêu đề, mô tả ngắn, công nghệ sử dụng và link GitHub.
 */
export default function ProjectCard({ project }) {
  const { title, description, tech, image, github } = project

  return (
    <article className="project-card">
      <div className="project-card__thumb">
        <img src={image} alt={`Ảnh chụp màn hình dự án ${title}`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <a
          className="project-card__link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={15} /> Xem GitHub <ExternalLink size={12} />
        </a>
      </div>
    </article>
  )
}
