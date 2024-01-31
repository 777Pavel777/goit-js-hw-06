`use strict`;

class Storage {
  #items = [];

  constructor(items) {
  this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
    return this.#items;
  }

  removeItem(itemToRemove) {
    const indexToRemove = this.#items.indexOf(itemToRemove);

    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
      return this.#items;
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());

storage.addItem("Droid");
console.log(storage.getItems());

storage.removeItem("Prolonger");
console.log(storage.getItems());
