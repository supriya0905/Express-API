let express = require('express');
const app = express();
// const router = express.Router();

const router = express.Router();

user_action = require('./function');


// router.get('/fetch/:id', user_action.fetchdetails)

router.post('/fetch', user_action.fetchdetails)

module.exports = router;


