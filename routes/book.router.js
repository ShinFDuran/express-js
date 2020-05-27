const express = require('express');

const { getBook, getBooks, createBook } = require('../controllers/books');

const router = express.Router();
router.route('/').get(getBooks).post(createBook);
router.get('/:id', getBook);

module.exports = router;
