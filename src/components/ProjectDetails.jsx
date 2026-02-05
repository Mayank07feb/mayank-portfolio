import React from "react";

export default function ProjectDetail({ project }) {
  return (
    <div id="tt-content-wrap">
      {/* ================= Page Header ================= */}
      <div
        id="page-header"
        className="ph-full ph-full-m ph-cap-xlg ph-center ph-image-parallax ph-caption-parallax"
      >
        <div className="ph-image ph-image-cover-1">
          <div className="ph-image-inner">
            <img src={project.hero.image} alt={project.hero.alt} />
          </div>
        </div>

        <div className="page-header-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h1 className="ph-caption-title">{project.title}</h1>

              {/* Project Description */}
              {project.description && (
                <div className="ph-caption-description">
                  {project.description}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="tt-scroll-down">
          <a
            href="#tt-page-content"
            className="tt-scroll-down-inner tt-magnetic-item"
            data-offset="0"
          >
            <div className="tt-scrd-icon"></div>
            <svg viewBox="0 0 500 500">
              <defs>
                <path
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                  id="textcircle"
                />
              </defs>
              <text dy="30">
                <textPath xlinkHref="#textcircle">
                  Scroll to Explore - Scroll to Explore -
                </textPath>
              </text>
            </svg>
          </a>
        </div>
      </div>

      {/* ================= Page Content ================= */}
      <div id="tt-page-content">
        {/* Project Info */}
        <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-12">
                <div className="tt-heading tt-heading-center tt-heading-xxlg">
                  <h2 className="tt-heading-title tt-text-reveal">
                    Projects
                  </h2>
                </div>
              </div>

              {/* <div className="tt-col-lg-8 mx-auto">
                <div className="tt-project-info-list tt-pil-inline tt-anim-fadeinup">
                  <ul>
                    {project.details?.season && (
                      <li>
                        <div className="pi-list-heading">Season</div>
                        <div className="pi-list-cont">
                          {project.details.season}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Quote */}
        {/* {project.quote && (
          <div className="tt-section">
            <div className="tt-section-inner tt-wrap">
              <div className="tt-row">
                <div className="tt-col-lg-9">
                  <div className="text-xxlg tt-text-reveal">
                    “{project.quote}”
                  </div>
                </div>
                <div className="tt-col-lg-3"></div>
              </div>
            </div>
          </div>
        )} */}

        {/* Gallery */}
        <div className="tt-section">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-gallery ttga-hover">
              <div className="tt-grid ttgr-layout-2 ttgr-gap-2">
                <div className="tt-grid-items-wrap isotope-items-wrap">
                  {project.gallery.map((item, index) => (
                    <div key={index} className="tt-grid-item isotope-item">
                      <div className="ttgr-item-inner">
                        <a
                          href={item.largeImage}
                          className="tt-gallery-item"
                          data-cursor="View"
                          data-fancybox={`gallery-${project.id}`}
                          data-caption={item.caption || ""}
                        >
                          <div className="tt-gallery-item-inner">
                            <div className="tt-gallery-image-wrap tt-anim-zoomin">
                              <figure className="tt-gallery-image ttgr-height">
                                <img
                                  src={item.image}
                                  loading="lazy"
                                  alt={item.alt}
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="tt-section padding-top-xlg-80">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-12 text-center">
                <a
                  href="/#projects"
                  className="tt-btn tt-btn-outline tt-magnetic-item"
                >
                  <span data-hover="Back to Projects">Back to Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
