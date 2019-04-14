// @flow
import { lazy } from 'react';

import type { IndexProps } from './IndexView';

const IndexView = lazy<IndexProps>(() => import(/* webpackChunkName: "index-view" */ './IndexView'));
const AboutView = lazy<React$Element<"div">>(() => import(/* webpackChunkName: "about-view" */ './AboutView'));

export {
  IndexView,
  AboutView,
};
