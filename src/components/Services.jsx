import React from 'react';

export default function Services(props) {
  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{props.t('services.subTitle')}</span>
            <h2 className="colorlib-heading">{props.t('services.title')}</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center animate-box fadeInUp animated">
            <div className="services color-1">
              <span className="icon">
                <i class="fas fa-hands-helping"></i>
              </span>
              <div className="desc">
                <h3>Analyse du besoin</h3>
                <p>
                  Recueil et analyse des besoins du client. <br />
                  L'aide à l’expression de ses besoins.
                  <br />
                  Préparation des User Stories.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box fadeInUp animated">
            <div className="services color-2">
              <span className="icon">
              <i class="fas fa-vial"></i>
              </span>
              <div className="desc">
                <h3>Test</h3>
                <p>
                  Préparation de la stratégie de test.
                  <br />
                  Gestion des bugs et anomalies.
                  <br />
                  Pilotage de l’équipe de test et validation logiciel.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box fadeInUp animated">
            <div className="services color-3">
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <div className="desc">
                <h3>Scrum Master </h3>
                <p>
                  Animation des cérémonies Agile.
                  <br /> Reporting d’avancement.
                  <br />
                  Création du dashboard de suivi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
