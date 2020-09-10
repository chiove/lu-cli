import {matchPath} from 'react-router-dom';

export default (path, routeList) => {
  let targetRoute; let targetMatch;
  for (const item of routeList) {
    targetMatch = matchPath(path, item);
    if (targetMatch) {
      targetRoute = item;
      break;
    }
  }
  return {targetRoute, targetMatch};
};
