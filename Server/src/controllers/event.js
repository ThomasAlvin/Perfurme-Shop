const db = require("../models");
const eventController = {
  getAll: async (req, res) => {
    try {
      events = await db.Event.findAll();
      return res.send(events);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getById: async (req, res) => {
    try {
      events = await db.Event.findOne({
        where: {
          id,
        },
      });
      return res.send(events);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getByHRId: async (req, res) => {
    try {
      events = await db.Event.findAll({
        where: {
          HR_ID: req.params.id,
        },
      });
      return res.send(events);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  createEvent: async (req, res) => {
    try {
      const { name, status, proposed_date1, proposed_date2, proposed_date3 } =
        req.body;
      await db.Event.create({
        name,
        status,
        proposed_date1,
        proposed_date2,
        proposed_date3,
      });
      return res.send("Event Created!");
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
};

module.exports = eventController;
