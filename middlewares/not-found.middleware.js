module.exports = function (request, response, next) {
  return response.status(404).send({ message: "page not Found" });
};
