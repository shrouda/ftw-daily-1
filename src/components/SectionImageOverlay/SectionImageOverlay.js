import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionImageOverlay.module.css';

const SectionImageOverlay = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroImage}>
        <h1 className={css.heroText}>
          <FormattedMessage id="SectionImageOverlay.title" />
        </h1>
      </div>
    </div>
  );
};

SectionImageOverlay.defaultProps = { rootClassName: null, className: null };

SectionImageOverlay.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionImageOverlay;
