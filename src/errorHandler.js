export const handleErrors = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
};

export const handle404 = (_req, res, _next) => {
  res.status(404).json({ message: 'Not Found' });
};
