const express = require('express')
const router = express.Router()

const userController = require('../controllers').user;
const itemController = require('../controllers').item;
const orderController = require('../controllers').order;
const orderdetailController = require('../controllers').orderdetail;

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

/* Item Router */
router.get('/api/item', itemController.list);
router.get('/api/item/:id', itemController.getById);
router.post('/api/item', itemController.add);
router.put('/api/item/:id', itemController.update);
router.delete('/api/item/:id', itemController.delete);

/* Order Router */
router.get('/api/order', orderController.list);
router.get('/api/order/:id', orderController.getById);
router.post('/api/order', orderController.add);
router.put('/api/order/:id', orderController.update);
router.delete('/api/order/:id', orderController.delete);

/* OrderDetail Router */
router.get('/api/orderdetail', orderdetailController.list);
router.get('/api/orderdetail/:id', orderdetailController.getById);
router.post('/api/orderdetail', orderdetailController.add);
router.put('/api/orderdetail/:id', orderdetailController.update);
router.delete('/api/orderdetail/:id', orderdetailController.delete);

module.exports = router;