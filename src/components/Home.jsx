import React, { Component } from 'react';

export default function Home(props) {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>{props.t('hello')}</h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://drive.google.com/open?id=1RK44IgBdia4-keL6uaYjVVr23CaJ6qYT"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>{props.t('home.resume')}</b>
                            <i className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>{props.t('home.interest1')}</h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/BarkhaShukla"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>{props.t('home.experience')}</b>{' '}
                            <i className="icon-briefcase3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>{props.t('home.interest2')} </h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://medium.com/@shuklabarkha17"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>{props.t('home.skills')}</b>{' '}
                            <i className="icon-book" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
