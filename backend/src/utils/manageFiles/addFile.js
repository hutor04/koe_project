const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

const addFile = async (file) => {
  const { db } = mongoose.connection;
  const {
    createReadStream,
    filename,
    mimetype,
    encoding,
  } = await file;
  try {
    const stream = createReadStream();
    const bucket = new GridFSBucket(db, { bucketName: 'gridfsdownload' });
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
  } catch (e) {
    return null;
  }
};

module.exports = addFile;
