const handler = (path, options) => (_req, res, _next) => {
  res.sendFile(path, options);
};

module.exports = handler;
