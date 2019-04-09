// @flow
import { lazy } from 'react';

const IndexView = lazy<React$Element<"div">>(() => import(/* webpackChunkName: "index-view" */ './IndexView'));
const AboutView = lazy<React$Element<"div">>(() => import(/* webpackChunkName: "about-view" */ './AboutView'));

export {
  IndexView,
  AboutView,
};
