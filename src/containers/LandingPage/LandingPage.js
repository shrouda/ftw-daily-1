import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import config from '../../config';
import {
  Page,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/saunatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/saunatimeTwitter-600x314.jpg';
import css from './LandingPage.module.css';

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
        <section className={css.heroContainer}>
          <div className={css.heroCTABackground}>
            <div className={css.centeredText}>
              <h1>Workspaces In Beautiful Places</h1>
              <p>Book a stunning home for your next vacation or workation.</p>
            </div>

            <div className={css.heroButtons}>
              <button className={css.guestButton}>Book A Home</button>
              <button className={css.rentButton}>Rent Your Home</button>
            </div>

          </div>
            <div className={css.customShapeDividerBottom1650353096}>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={css.shapeFill}></path>
              </svg>
            </div>
        </section>

        <section className={css.valueProp}>
          <div>
            <h3>Stay Online, Explore Off Grid</h3>
            <p>Nomacasa offers a portfolio of modern homes custom-curated for remote work, located in naturally beautiful and inspiring locations.</p>
          </div>
        </section>

        <section className={css.homeImage}>
          <div className={css.featuredHome}>
            <h4>Test</h4>
          </div>
        </section>

        <section className={css.locationHeader}>
        <div className={css.customShapeDividerBottom1650353097}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={css.shapeFill2}></path>
          </svg>
        </div>
        <div>
          <h3>Locations Far & Wide</h3>
          <p>From lush forests to desert lands, Nomacasa provides a variety of homes in different terrains – the world is yours to explore.</p>
          </div>
          <div className={css.customShapeDividerBottom1650353096}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={css.shapeFill}></path>
            </svg>
          </div>
        </section>

        <section className={css.locations}>
          <div className={css.cards}>

            <div className={css.card}>
              <div id={css.malibu} className={css.cardImage}></div>
                <div className={css.cardContent}>
                  <h4>Malibu</h4>
                  <p>Enjoy stunning views from a modern home overlooking sun-covered mountains and the Pacific Ocean.</p>
                  <a href=" ">learn more</a>
                </div>
            </div>
            <div className={css.card}>
              <div id={css.joshuatree} className={css.cardImage}></div>
                <div className={css.cardContent}>
                  <h4>Joshua Tree</h4>
                  <p>Modern homes, each with one bedroom, one bathroom, a full kitchen, and dedicated work area – overlooking untouched desert landscapes.</p>
                  <a href=" ">learn more</a>
                </div>
            </div>
            <div className={css.card}>
              <div id={css.yosemite} className={css.cardImage}></div>
                <div className={css.cardContent}>
                  <h4>Yosemite (Oakhurst)</h4>
                  <p>Enjoy expansive views and convenient access to one of America's most storied National Parks.</p>
                  <a href=" ">learn more</a>
              </div>
            </div>
            <div className={css.card}>
              <div id={css.sequoia} className={css.cardImage}></div>
                <div className={css.cardContent}>
                  <h4>Sequoia National Park</h4>
                  <p>Humbling and historic. Explore endless hiking trails all from a cozy cabin tucked amongst ancient trees.</p>
                  <a href=" ">learn more</a>
              </div>
            </div>

          </div>
        </section>

        <section className={css.testimonialSection}>

        <div className={css.customShapeDividerBottom1650353091}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={css.shapeFill4}></path>
          </svg>
        </div>

        <div className={css.testimonials}>
        <h3>A Lot Of Love From Guests & Hosts</h3>

        <div className={css.testimonialCards}>
          <div className={css.testimonialCard}>
            <div className={css.card1}>
              <p>The area was GORGEOUS, and the property was cute and clean. Very easy to find with directions provided by Nomacasa</p>
              <h4>Catherine K.</h4>
              <h5>Guest // Austin, TX</h5>
            </div>
          </div>

          <div className={css.testimonialCard}>
            <div className={css.card2}>
              <p>Nomacasa has expanded our vacation rental to a new class of professional and ambitious audience of travelers.</p>
              <h4>Daniel L.</h4>
              <h5>Host // Malibu, CA</h5>
            </div>
          </div>

        </div>

        </div>

        <div className={css.customShapeDividerBottom1650353099}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={css.shapeFill3}></path>
          </svg>
        </div>
        </section>

        <section className={css.hostSignup}>

          <div className={css.hostContainer}>
            <h3>Become A Host On Nomacasa</h3>
            <p>Have a stunning home near a national park? Become a host today</p>
            <button className={css.hostButton}>Learn More</button>
          </div>

        </section>

        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
