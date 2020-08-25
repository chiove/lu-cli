import routes from 'src/router';
import { matchRoutes} from 'react-router-config';

export default () => {
    const promises = matchRoutes(routes, window.location.pathname).map(({route})=>{
        return route.getinitalData ? route.getinitalData() : Promise.resolve(null);
      });

      return Promise.all(promises)
}