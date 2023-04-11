const { app } = require("../../database/conn");
// const checkValidate = require("../middlewares/checkValidate");
const isAuth = require("../../middlewares/isAuth");
const User = require("../../models/User");

module.exports = app.put("/users/:id", isAuth, async (req, res) => {
  try {
    // checagem se email já existe no banco de dados
    const email = await User.findOne({ where: { email: req.body.email } });

    if (email)
      return res.status(401).json({ message: "email already exists!" });

    // validação do req.body.email
    if (
      !req.body.email ||
      !req.body.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      return res.status(400).json({
        message: "email format not valid",
      });
    }

    // validação do req.body.password
    if (
      !req.body.password ||
      !req.body.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,15}$/
      )
    ) {
      return res.status(400).json({
        message:
          "Password must have between 8 to 15 characters, uppercase and lowercase letters, numbers and special characters.",
      });
    }

    // criptografia da senha
    req.body.password = await require("../../services/hashPassword")(
      req.body.password
    );

    // busca do usuário
    const result = await User.findByPk(req.params.id);

    if (!result) return res.status(422).json({ message: "User not found!" });

    // atualização do usuário
    await result.update(req.body);
    delete result.dataValues.password;

    // retorno do usuário atualizado (menos a senha)
    return res
      .status(200)
      .json({ message: "User updated successfully", result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});