const gcs = require("@google-cloud/storage");
const _ = require("lodash/fp");

const _isNonTrivial = path => Boolean(path.replace(/\//g, ""));

const bucketProxy = bucketName => {
  const storage = new gcs.Storage();
  const bucket = storage.bucket(bucketName);

  return async (req, res, _next) => {
    const metadata = await bucket.getMetadata();
    const mainPageSuffix = _.get("0.website.mainPageSuffix")(metadata);
    const notFoundPage = _.get("0.website.notFoundPage")(metadata);
    let paths = _isNonTrivial(req.path) ? [req.path] : [];

    if (mainPageSuffix) {
      paths.push(`${req.path}/${mainPageSuffix}`);
    }
    if (notFoundPage) {
      paths.push(notFoundPage);
    }

    const files = paths.map(path => bucket.file(path));
    for (let file of files) {
      const [exists] = await file.exists();
      if (exists) {
        const metadata = await file.getMetadata();
        res.type(metadata[0].contentType);
        return file.createReadStream().pipe(res);
      }
    }
    return res.status(404).end();
  };
};

module.exports = bucketProxy;
