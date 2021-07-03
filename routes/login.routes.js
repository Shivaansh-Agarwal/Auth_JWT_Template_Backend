const express = require('express');
const jwt = require('jsonwebtoken');
const {Users} = require('../data.js');
const {logger} = require('../middlewares/logger.js');

const router = express.Router();
router.use(logger);

const privateKey = process.env['privateKey'];

router
  .route('/')
  .post(async (req, res) => {
    try {
      const {username, password} = req.body;
      const user = findUserByUsername(username);
      if(user && user.password === password){
        const token = jwt.sign({username, password}, privateKey, { expiresIn: '24h' });
        res.status(200).json({
          success: true, 
          token: token
        });
      } else {
        res.status(401).json({
          success: false,
          msg: "Password incorrect"
        });
      }
    } catch (err) {
      res.status(401).json({
          success: false,
          msg: "Payload incorrect"
        });
    }   
  });

function findUserByUsername(username){
  return Users.find(user => user.username === username);
}

module.exports = {router};