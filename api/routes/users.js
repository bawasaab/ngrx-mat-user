var express = require('express');
var router = express.Router();

const { getUserById, getUserList } = require('../services/users.service')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await getUserList()
  res.send({
    code: 200,
    msg: 'User Listing',
    data: {users}
  });
});

router.get('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id)
  const user = await getUserById(id)
  res.send({
    code: 200,
    msg: 'User Details',
    data: {user}
  });
});

module.exports = router;
