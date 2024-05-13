module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //Mysql에는 users로 저장됨.
      //id가 기본적으로 들어있다.
      email: {
        type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, //필수
        unique: true, //고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
      password: {
        type: DataTypes.STRING(100), //비밀번호는 암호화하면 길이가 늘어나기 때문에 넉넉하게 잡아줌
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8", //한글
      collate: "utf8_general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};
