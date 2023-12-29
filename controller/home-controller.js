const Macbook = require("../model/macbook-model");

exports.macbook = async (req, res, next) => {
  try {
    const macBook = await Macbook.find();
    res.json(macBook);
  } catch (error) {
    res.json(error);
  }
};
