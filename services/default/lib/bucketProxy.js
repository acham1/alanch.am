const gcs = require("@google-cloud/storage");
const _ = require("lodash/fp");

const bucketProxy = async bucketName => {
  const storage = new gcs.Storage();
  const bucket = storage.bucket(bucketName);
  // let metadata = await bucket.getMetadata(bucketName);
  // const mainPageSuffix = _.get("website.mainPageSuffix")(metadata);
  // const notFoundPage = _.get("website.notFoundPage")(metadata);

  return async (req, res, _next) => {
    const path = req.path.slice(1);
    const file = bucket.file(path);
    file.createReadStream().pipe(res);
  };
};

module.exports = bucketProxy;
