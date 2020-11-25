const express = require('express');
const mongoose = require('mongoose');
const { ObjectId, GridFSBucket } = require('mongodb');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { db } = mongoose.connection;
  const gfs = new GridFSBucket(db, { bucketName: 'gridfsdownload' });
  try {
    gfs.openDownloadStream(ObjectId(id)).pipe(res);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.end();
  }
});

module.exports = router;
