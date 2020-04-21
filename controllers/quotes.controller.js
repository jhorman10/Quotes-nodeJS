const path = require("path");
const DB_PATH = path.join(__dirname, "/../data/db.json");
let db = require(DB_PATH);
const fs = require("fs");

function render(file, response) {
  return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
  async index(request, response) {
    return render("quotes", response);
  }

  async get(request, response) {
    return response.send(db);
  }

  async add(request, response) {
    const { body: quote } = request;
    const lastQuote = db[db.length - 1];
    const { id } = lastQuote;
    quote.id = id + 1;
    db.push(quote);
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    return response.status(201).send();
  }
}

module.exports = new QuotesController();
