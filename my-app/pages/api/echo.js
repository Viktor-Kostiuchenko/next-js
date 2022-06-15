const echo = (req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: req.query.message ?? 'default messsage' }));
};

export default echo;
