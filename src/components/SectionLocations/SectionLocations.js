import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import malibuImage from './images/location_malibu.jpg';
import joshuatreeImage from './images/location_joshuatree.jpg';
import yosemiteImage from './images/location_yosemite.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Malibu',
          malibuImage,
          '?address=Malibu%2C%20California%2C%20United%20States&bounds=34.148452995%2C-118.567028009%2C34.00011701%2C-119.06832997'
        )}
        {locationLink(
          'JoshuaTree',
          joshuatreeImage,
          '?address=Joshua%20Tree%2C%20California%2C%20United%20States&bounds=34.251618999%2C-116.191211022%2C34.032542%2C-116.457775382'
        )}
        {locationLink(
          'Yosemite',
          yosemiteImage,
          '?address=Yosemite%20National%20Park%2C%20California%2C%20United%20States&bounds=37.94425533%2C-119.53312978%2C37.15544851%2C-120.07882684'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
