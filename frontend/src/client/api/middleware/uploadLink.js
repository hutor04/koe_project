import { createUploadLink } from 'apollo-upload-client';
import config from '../../../config';

const uploadLink = createUploadLink({
  uri: config.api,
  credentials: "same-origin",
});

export default uploadLink;
