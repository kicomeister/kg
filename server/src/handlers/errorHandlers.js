export const general = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {},
  });
};
