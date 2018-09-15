/**
 *
 * Asynchronously loads the component for PlayerView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
