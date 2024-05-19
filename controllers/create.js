const entry = require("../models/mschema");

exports.createEntry = async (req, res) => {
  try {
    const { title, subtitle, coverarthq } = req.body;
    console.log(title, subtitle, coverarthq);
    const response = await entry.create({
      title: title,
      subtitle: subtitle,
      coverarthq: coverarthq,
    });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Successful",
    });
  } catch (err) {
    console.log(err);
    // console.error(messsage);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
