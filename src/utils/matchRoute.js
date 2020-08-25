import { matchPath } from 'react-router-dom';
export default (path, routeList) => {
    let targetRoute, targetMatch;
    for (var item of routeList) {
        targetMatch = matchPath(path, item);
        if (targetMatch) {
            targetRoute = item;
            break;
        }
    }
    return { targetRoute, targetMatch };
}