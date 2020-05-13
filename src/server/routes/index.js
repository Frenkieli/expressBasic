import express from 'express';
import config from './../../config/config';

const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'temi' , error: ''});
});

export default router;