function createBook(req, res, next) {
  res.status(201).json({ success: true, msg: `Create new Book` });
}

module.exports = createBook;
