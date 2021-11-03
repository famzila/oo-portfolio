import React from 'react';

export default function Experiences(props) {
  const experiences = [0, 1, 2, 4];
  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{props.t('routes.experience')}</span>
            <h2 className="colorlib-heading animate-box fadeInUp animated">
              {props.t('experience.title')}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {experiences.map((exp, index) => {
                return (
                  <article
                    key={index}
                    className="timeline-entry animate-box fadeInRight animated"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">
                            {props.t(
                              `experience.list.experience${index}.title`,
                            )}
                          </a>{' '}
                          <span>
                            {props.t(
                              `experience.list.experience${index}.dates`,
                            )}
                          </span>
                          <br />
                          <span>
                            {props.t(
                              `experience.list.experience${index}.subTitle`,
                            )}
                          </span>
                        </h2>
                        <p>
                          {props.t(
                            `experience.list.experience${index}.description`,
                          )}
                        </p>
                        <br />
                        <h2><span><strong>Tech: </strong>
                          {props.t(`experience.list.experience${index}.tech`)}
                        </span></h2>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
