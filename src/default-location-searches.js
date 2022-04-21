import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-helsinki',
    predictionPlace: {
      address: 'Helsinki, Finland',
      bounds: new LatLngBounds(new LatLng(60.29783, 25.25448), new LatLng(59.92248, 24.78287)),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'Turku, Finland',
      bounds: new LatLngBounds(new LatLng(60.53045, 22.38197), new LatLng(60.33361, 22.06644)),
    },
  },

];
export default defaultLocations;
