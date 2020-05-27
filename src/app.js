const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const log4js = require('log4js');

dotenv.config({ path: './config/config.env' });

// Logs configuration
log4js.configure('./config/log4js.json');
const logger = log4js.getLogger('App');

// Express setup
const app = express();
app.use(cors());
app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.get('/', (req, res) => {
  res.json({ ok: true });
});

// Launch Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
