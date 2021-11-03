import React, { Component } from 'react';

export default function About(props) {
  const valuesList = [0, 1, 2, 3, 4, 5];
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">{props.t('about.title')}</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    <strong>{props.t('welcome.hello')}</strong>{' '}
                    {props.t('about.me')}
                  </p>
                  <p>{props.t('about.values')}</p>
                </div>
              </div>
            </div>
            <div className="row">
              {valuesList.map((elt, index) => {
                return (
                  <div
                    className="col-md-4 animate-box fadeInLeft animated"
                    data-animate-effect="fadeInLeft"
                    key={index}
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i
                          className={props.t(`about.valuesList.${index}.icon`)}
                        ></i>
                      </span>
                      <h3>{props.t(`about.valuesList.${index}.title`)}</h3>
                      <p>{props.t(`about.valuesList.${index}.description`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div
                className="col-md-12 animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div className="hire">
                  <h2>
                    I am happy to know you <br />
                    that 300+ projects done sucessfully!
                  </h2>
                  <a href="#" className="btn-hire">
                    Hire me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
