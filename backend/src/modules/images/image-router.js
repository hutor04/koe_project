const express = require('express');
const { MongoClient, ObjectId, GridFSBucket } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/', { useUnifiedTopology: true });
const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  await client.connect();
  const db = client.db('b_good');
  const gfs = new GridFSBucket(db, { bucketName: 'gridfsdownload' });
  try {
    gfs.openDownloadStream(ObjectId(id)).pipe(res);
  } catch (e) {
    console.log(e);
    res.end();
  }
});

module.exports = router;
