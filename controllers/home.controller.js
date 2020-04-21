const path = require("path");

function render(file, response) {
  return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class HomeController {
  async index(request, response) {
    return render('home', response);
  }

  async about(request, response) {
    return render('about', response);
  }
}

module.exports = new HomeController();
