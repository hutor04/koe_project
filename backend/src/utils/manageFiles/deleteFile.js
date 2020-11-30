const mongoose = require('mongoose');
const { ObjectId, GridFSBucket } = require('mongodb');

const deleteFile = async (id) => {
  const { db } = mongoose.connection;
  const bucket = new GridFSBucket(db, { bucketName: 'gridfsdownload' });
  bucket.delete(ObjectId(id));
};

module.exports = deleteFile;
