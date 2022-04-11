import basicInfo from './basicInfo';
import servers from './servers';
import components from './components';
import tags from './tags';
import security from './security';
import routes from './routes';

const docs = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...security,
    ...routes,

};
export default docs;