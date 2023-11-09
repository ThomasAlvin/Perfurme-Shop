module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define(
    "Tokens", //nama table
    {
      token: {
        type: Sequelize.STRING,
      },
      expired: {
        type: Sequelize.DATE,
      },
      AdminId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, // nama nama kolom
    {
      paranoid: true,
      primaryKey: ["AdminId"],
    } // options
  );

  return Token;
};
