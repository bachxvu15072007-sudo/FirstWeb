import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import ProjectCard from './ProjectCard.jsx'
import { projectsData, allTechs } from '../../data/projectsData.js'
import './Projects.css'

/**
 * Projects Section — danh sách dự án dạng Card, có thanh tìm kiếm và
 * bộ lọc theo công nghệ. Trạng thái tìm kiếm/lọc quản lý bằng useState.
 */
export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTech, setActiveTech] = useState('Tất cả')

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return projectsData.filter((project) => {
      const matchesTech = activeTech === 'Tất cả' || project.tech.includes(activeTech)
      const matchesSearch =
        term.length === 0 ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term)

      return matchesTech && matchesSearch
    })
  }, [searchTerm, activeTech])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">03_projects</span>
        <h2 className="projects__heading">Dự án đã thực hiện</h2>

        <div className="projects__controls">
          <label className="projects__search">
            <Search size={16} className="projects__search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm dự án theo tên hoặc mô tả..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Tìm kiếm dự án"
            />
          </label>

          <div className="projects__filters" role="group" aria-label="Lọc theo công nghệ">
            {allTechs.map((tech) => (
              <button
                key={tech}
                className={`filter-chip ${activeTech === tech ? 'filter-chip--active' : ''}`}
                onClick={() => setActiveTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects__grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="projects__empty mono">
            // Không tìm thấy dự án nào phù hợp với "{searchTerm}"
          </p>
        )}
      </div>
    </section>
  )
}
