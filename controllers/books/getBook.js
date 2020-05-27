function getBook(req, res, next) {
  res.status(200).json({ success: true, msg: `Show Book ${req.params.id}` });
}

module.exports = getBook;
