// src/components/ProjectDetail.jsx
import React from "react";

export default function ProjectDetail({ project }) {
  return (
    <div id="tt-content-wrap">
      <div
        id="page-header"
        className="ph-full ph-full-m ph-cap-xlg ph-center ph-image-parallax ph-caption-parallax"
      >
        <div className="ph-image ph-image-cover-1">
          <div className="ph-image-inner">
            <img
              src={project.hero.image}
              alt={project.hero.alt}
            />
          </div>
        </div>

        <div className="page-header-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h1 className="ph-caption-title">{project.title}</h1>
              <div className="ph-caption-categories">
                {project.categories.map((cat, index) => (
                  <div key={index} className="ph-caption-category">{cat}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Uncomment if you want social sharing */}
        {/* <div className="ph-share">
          <div className="ph-share-inner">
            <div className="ph-share-trigger">
              <div className="ph-share-text">Share</div>
              <div className="ph-share-icon"><i className="fas fa-share"></i></div>
            </div>
            <div className="ph-share-buttons">
              <ul>
                <li>
                  <a href="#" className="tt-magnetic-item" title="Share on Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="tt-magnetic-item" title="Share on X">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="tt-magnetic-item" title="Share on Pinterest">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

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
                ></path>
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

      <div id="tt-page-content">
        {/* Project Story Section */}
        <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-lg-4 padding-right-md-5-p">
                <div className="tt-heading tt-heading-xlg margin-bottom-30">
                  <h2 className="tt-heading-title tt-text-reveal">
                    {project.category === "Fashion" ? "Collection" : "Project"}
                    <br /> Story
                  </h2>
                </div>
              </div>

              <div className="tt-col-lg-8">
                <div className="tt-anim-fadeinup">
                  {project.story.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="tt-project-info-list tt-pil-inline tt-anim-fadeinup margin-top-40">
                  <ul>
                    <li>
                      <div className="pi-list-heading">Client</div>
                      <div className="pi-list-cont">{project.details.client}</div>
                    </li>
                    {project.details.season && (
                      <li>
                        <div className="pi-list-heading">Season</div>
                        <div className="pi-list-cont">{project.details.season}</div>
                      </li>
                    )}
                    {project.details.year && (
                      <li>
                        <div className="pi-list-heading">Year</div>
                        <div className="pi-list-cont">{project.details.year}</div>
                      </li>
                    )}
                    <li>
                      <div className="pi-list-heading">Services</div>
                      <div className="pi-list-cont">{project.details.services}</div>
                    </li>
                    <li>
                      <div className="pi-list-heading">Location</div>
                      <div className="pi-list-cont">{project.details.location}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Quote Section */}
        {project.quote && (
          <div className="tt-section">
            <div className="tt-section-inner tt-wrap">
              <div className="tt-row">
                <div className="tt-col-lg-9">
                  <div className="text-xxlg tt-text-reveal">
                    "{project.quote}"
                  </div>
                </div>
                <div className="tt-col-lg-3"></div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
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

        {/* Back to Projects Button */}
        <div className="tt-section padding-top-xlg-80">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-row">
              <div className="tt-col-12">
                <div className="text-center">
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
    </div>
  );
}