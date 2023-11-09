module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define(
    "Events",
    {
      name: Sequelize.STRING,
      status: Sequelize.ENUM("accepted", "pending", "denied"),
      reason: Sequelize.STRING,
      proposed_date1: Sequelize.DATE,
      proposed_date2: Sequelize.DATE,
      proposed_date3: Sequelize.DATE,
      confirmed_date: Sequelize.DATE,
    },
    {
      paranoid: true,
    }
  );
  return Event;
};
