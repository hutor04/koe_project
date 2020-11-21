const throng = require('throng');
const mongoose = require('mongoose');
const url = require('url');
const app = require('./app');
const config = require('./config');

const mongoHost = new url.URL(config.MONGODB_URI).host;

const startServer = async () => {
  const mongooseOptions = {
    useNewUrlParser: true,
    promiseLibrary: global.Promise,
    useUnifiedTopology: true,
  };
  try {
    await Promise.all([
      mongoose.connect(config.MONGODB_URI, mongooseOptions),
      app.listen(config.PORT),
    ]);
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${config.PORT}. Connected to mongo at ${mongoHost}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Could not start the app:', e);
  }
};

throng({
  count: config.WORKERS,
  lifetime: Infinity,
  worker: startServer,
});
