const db = require("../models");
const { nanoid } = require("nanoid");
const moment = require("moment");

const adminController = {
  getAll: async (req, res) => {
    try {
      admins = await db.Admin.findAll();
      return res.send(admins);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getById: async (req, res) => {
    try {
      admins = await db.Admin.findOne({
        where: {
          id,
        },
      });
      return res.send(admins);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  createAdmin: async (req, res) => {
    try {
      const { username, role, password } = req.body;
      await db.Admin.create({
        username,
        role,
        password,
      });
      return res.send("Admin Created!");
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  },
  loginV2: async (req, res) => {
    const t = await db.sequelize.transaction();
    try {
      const { username, password } = req.body;
      let token = "";
      const user = await db.Admin.findOne({
        where: {
          username,
          password,
        },
      });
      if (user.dataValues.username) {
        const payload = user.dataValues.id;
        const generateToken = nanoid();
        const findToken = await db.Token.findOne({
          where: {
            AdminId: payload,
          },
        });
        if (findToken) {
          token = await db.Token.update(
            {
              expired: moment().add(3, "d").format(),
              token: generateToken,
            },
            {
              where: {
                AdminId: payload,
              },
              transaction: t,
            }
          );
        } else {
          token = await db.Token.create(
            {
              expired: moment().add(3, "days").format(),
              token: generateToken,
              AdminId: payload,
            },
            { transaction: t }
          );
        }
        await t.commit();
        res.status(200).send({
          message: "login berhasil",
          token: generateToken,
        });
      } else {
        await t.commit();
        throw new Error("Email or Password is incorrect");
      }
    } catch (err) {
      await t.rollback();
      console.log(err.message);
      return res
        .status(500)
        .send({ message: "Email or password is incorrect" });
    }
  },
  getByToken: async (req, res, next) => {
    try {
      let payload = await db.Token.findOne({
        where: {
          token,
          expired: {
            [db.Sequelize.Op.gte]: moment().format(),
          },
          valid: true,
        },
      });
      if (!payload) {
        throw new Error("token has expired");
      }
      let user = await db.User.findOne({
        where: {
          id: payload.dataValues.AdminId,
        },
      });
      delete user.dataValues.password;
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  },
  getUserByLoginToken: async (req, res) => {
    res.status(200).send(req.user);
  },
};

module.exports = adminController;
