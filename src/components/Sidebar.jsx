import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  let activeCurrencyKey = 'euro';
  let activeCountryKey = 'fr';
  const { t, i18n } = useTranslation('common');
  const links = [
    { name: `${t('routes.home')}`, link: '/' },
    { name: `${t('routes.booking')}`, link: '/booking' },
    { name: `${t('routes.contact')}`, link: '/contact' },
    { name: `${t('routes.about')}`, link: '/about' },
    { name: `${t('routes.blog')}`, link: '/blog' },
  ];

  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="js-fullheight text-white">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: 'url(images/PORTFOLIO.jpg)' }}
            />
            <h1 id="colorlib-logo">
              <a href="/">Omar OUTABARINE</a>
            </h1>
            <span className="position">Senior BA & EM</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse" aria-expanded="false">
              <ul>
                <li className="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="about">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="services">
                    Services
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="experience">
                    Experience
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="work">
                    Work
                  </a>
                </li>
                <li className="">
                  <a href="#" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/barkha-ramesh-shukla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BarkhaShukla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@shuklabarkha17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-blogger2"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p>
              <small>
                Made with <i className="icon-heart" aria-hidden="true" /> By{' '}
                <a href="http://www.fam-front.com">FAM</a>
                <br></br>
                Thanks{' '}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>{' '}
                for inspiration
              </small>
            </p>
            {/* <p><small>
                Something coming soon !!
              </small></p> */}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
