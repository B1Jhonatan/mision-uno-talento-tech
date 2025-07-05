class DataBase {
  constructor() {
    this.ddbb = [];
  }

  addItem(element) {
    this.ddbb.push(element);
  }

  getItems() {
    return this.ddbb;
  }

  removeItem(id) {
    this.ddbb = this.ddbb.filter((element) => element.id !== id);
  }
}

export default DataBase;
