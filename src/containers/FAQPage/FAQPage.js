import React from 'react';

import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import { SectionImageOverlay } from '../../components';
import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage
    title="Frequently Asked Questions"
      schema={{
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "description": "Frequently asked questions about Nomacasa.",
        "name": "Frequently Asked Questions",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Question 1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Answer: Lorem ipsum"
            }
          }
        ]
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>

        <div className={css.heroContainer}>
          <SectionImageOverlay className={css.hero} />
        </div>

          <h1>Frequently Asked Questions</h1>

          <div>
            <h3>Are Nomacasa properties for daytime or nighttime rentals?</h3>
            <p>We provide nightly rentals. Each property features bedrooms to host guests for an overnight stay.</p>
          </div>
          <div>
            <h3>Which places have Nomacasa properties?</h3>
            <p>We're currently focused on homes adjacent to national parks and stunning landscapes in the Western US, but plan to expand to more areas very soon.</p>
          </div>
          <div>
            <h3>Where are you guys located?</h3>
            <p>Los Angeles, CA.</p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
