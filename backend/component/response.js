const response = (statusCode, datas, message, res) => {
  res.status(statusCode).json({
    payload: {
      statusCode,
      datas,
      message,
    },
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
  });
};
module.exports = response;
