module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define(
    "Admins",
    {
      username: Sequelize.STRING,
      role: Sequelize.ENUM("Vendor", "HR"),
      password: Sequelize.STRING,
    },
    {
      paranoid: true,
    }
  );
  return Admin;
};
