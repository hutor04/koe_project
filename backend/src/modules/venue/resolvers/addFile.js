const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/', { useUnifiedTopology: true });

const addFile = async (file) => {
  await client.connect();
  const db = client.db('b_good');
  const {
    createReadStream,
    filename,
    mimetype,
    encoding,
  } = await file;
  const stream = createReadStream();
  const bucket = new mongodb.GridFSBucket(db, { bucketName: 'gridfsdownload' });
  const uploadStream = bucket.openUploadStream(filename);
  await new Promise((resolve, reject) => {
    stream
      .pipe(uploadStream)
      .on('error', reject)
      .on('finish', resolve);
  });
  return {
    _id: uploadStream.id,
    filename,
    mimetype,
    encoding,
  };
};

module.exports = addFile;
