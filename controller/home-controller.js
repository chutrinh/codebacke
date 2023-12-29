const Macbook = require("../model/macbook-model");

exports.macbook = async (req, res, next) => {
  try {
    const macBook = await Macbook.find();
    res.json({ states: "ok", data: macBook });
  } catch (error) {
    res.json(error);
  }
};
