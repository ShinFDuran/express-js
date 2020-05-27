function getBooks(req, res, next) {
  res.status(200).json({ success: true, msg: `Show all Books` });
}

module.exports = getBooks;
