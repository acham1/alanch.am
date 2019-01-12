const gcs = require("@google-cloud/storage");
const _ = require("lodash/fp");

const isNonTrivial = path => Boolean(path.replace(/\//g, ""));

const bucketProxy = bucketName => {
  const storage = new gcs.Storage();
  const bucket = storage.bucket(bucketName);

  return async (req, res, _next) => {
    const metadata = await bucket.getMetadata();
    const mainPageSuffix = _.get("0.website.mainPageSuffix")(metadata);
    const notFoundPage = _.get("0.website.notFoundPage")(metadata);
    let paths = isNonTrivial(req.path) ? [req.path] : [];

    if (mainPageSuffix) {
      paths.push(`${req.path}/${mainPageSuffix}`);
    }
    if (notFoundPage) {
      paths.push(notFoundPage);
    }

    for (let path of paths) {
      const file = bucket.file(path);
      const [exists] = await file.exists();
      if (exists) {
        return file.createReadStream().pipe(res);
      }
    }
    return res.status(404).end();
  };
};

module.exports = bucketProxy;
