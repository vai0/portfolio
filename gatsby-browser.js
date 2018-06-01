import { anchorate } from 'anchorate';

exports.onRouteUpdate = () => {
  anchorate({
    scroller: element => {
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    },
  });
};
