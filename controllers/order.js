const User = require('../models').User;
const Item = require('../models').Item;
const Order = require('../models').Order;

module.exports = {
    list(req, res) {
        return Order.findAll()
            .then((orders) => res.status(200).send(orders))
            .catch((error) => {
                res.status(500).send(error)
            })
    },

    getById(req, res) {
        return Order.findByPk(req.params.id, {
            include: [
                {
                    model: Item,
                    as: 'items'
                },
                {
                    model: User,
                    as: 'users'
                }
            ]
        })
            .then((order) => {
                if (!order) {
                    return res.status(404).send({
                        message: 'Order Not Found'
                    })
                }
                return res.status(200).send(order);
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    },

    add(req, res) {
        return Order.create({
            tgl_transaksi: req.body.tgl_transaksi,
            status: req.body.status
        })
            .then((order) => res.status(201).send(order))
            .catch((error) => {
                res.status(500).send(error)
            })
    },

    update(req, res) {
        return Order.findByPk(req.params.id)
            .then((order) => {
                if (!order) {
                    return res.status(404).send({
                        message: 'Order Not Found'
                    })
                }
                return order.update({
                    tgl_transaksi: req.body.tgl_transaksi,
                    status: req.body.status
                })
                .then((order) => res.status(200).send(order))
                .catch((error) => {
                    res.status(500).send(error)
                })
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    },
    
    delete(req, res) {
        return Order.findByPk(req.params.id)
        .then((order) => {
            if (!order) {
                return res.status(404).send({
                    message: 'Order Not Found'
                })
            }
            return order.destroy()
                .then(() => res.status(204).send({
                    message: "Order is deleted"
                }))
                .catch((error) => {
                    res.status(400).send(error)
                })
        })
        .catch((error) => {
            res.status(200).send(error)
        })
    }
}