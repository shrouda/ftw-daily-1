import React from 'react';

import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import image from './addalisting.jpg';

import css from './AddAListingPage.module.css';

const AddAListingPage = () => {
  // prettier-ignore
  return (
    <StaticPage
    title="Add A Listing"
      schema={{
        "@context": "http://schema.org",
        "@type": "AddAListing",
        "description": "Become a host on Nomacasa.",
        "name": "Become A Host On Nomacasa",
        "mainEntity": [
          // add SEO interaction content here
        ]
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>

          <section className={css.heroContainer}>
              <div className={css.centeredText}>
                <h1>Host On Nomacasa</h1>
                <p>We believe remote work doesn’t have to exclusively take place indoors, but can instead be improved with access to the great outdoors</p>
              </div>
              <div className={css.caption}>
                <h5>Villa Agave // Malibu, CA</h5>
              </div>

              <div className={css.customShapeDividerBottom1650353096}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={css.shapeFill}></path>
                </svg>
              </div>
          </section>

          <section className={css.mainContent}>
            <h1>Redefining Remote Work</h1>

            <div>
              <h2>Not Another OTA</h2>
                <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
              <h2>Not Another OTA</h2>
                <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
              <h2>Not Another OTA</h2>
                <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
            </div>
          </section>

          <section className={css.midSection}>

          </section>

          <section className={css.mainContent}>
            <h1>Redefining Remote Work</h1>

            <div>
              <h2>Not Another OTA</h2>
                <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
              <h2>Not Another OTA</h2>
                <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
              <h2>Not Another OTA</h2>
                <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
            </div>
          </section>

          <section className={css.buttonSection}>
          <div>
            <button className={css.joinButton} type="button">Join Today</button>
          </div>
          </section>

        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AddAListingPage;
