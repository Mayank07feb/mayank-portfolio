import React from "react";

export default function ProjectsList({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <p className="text-gray-500">No projects found.</p>
    );
  }

  return (
    <div className="tt-section no-padding-top padding-top-xlg-80 padding-bottom-20 padding-bottom-xlg-80">
      <div className="tt-section-inner">
        <div className="tt-portfolio-preview-list tt-ppli-portrait tt-ppli-hover">
          <div className="tt-ppl-items-list">
            {projects.map((project) => (
              <a href={`/projects/${project.slug}`} key={project.id} className="tt-ppl-item">
                <div className="tt-ppli-preview">
                  <div className="tt-ppli-preview-image">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </div>
                </div>

                <div className="tt-ppl-item-inner">
                  <div className="tt-ppl-item-holder">
                    <div className="tt-ppli-col tt-ppli-col-count">
                      <div className="tt-ppli-count"></div>
                    </div>

                    <div className="tt-ppli-col tt-ppli-col-caption">
                      <div className="tt-ppli-caption">
                        <h2 className="tt-ppli-title">{project.title}</h2>
                        <div className="tt-ppli-categories">
                          <div className="tt-ppli-category">{project.category}</div>
                        </div>
                      </div>
                    </div>

                    <div className="tt-ppli-col tt-ppli-col-info tt-justify-content-md-end">
                      <div className="tt-ppli-info">{project.description}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
