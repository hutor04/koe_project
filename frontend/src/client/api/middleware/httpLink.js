import { HttpLink } from '@apollo/client';
import config from '../../../config';

const httpLink = new HttpLink({ uri: config.api });

export default httpLink;
