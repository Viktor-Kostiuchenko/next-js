const getById = (req, res) => {
  res.json({ yourId: req.query.id });
};

export default getById;
