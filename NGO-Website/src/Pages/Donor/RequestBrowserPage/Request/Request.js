export const TYPE_OF_REQUESTS = {
  food: "Food",
  clothing: "Clothing",
  school_supplies: "School supplies",
  blood_donation: "Blood donation",
  probono: "Probono",
};

export class Request {
  constructor(type, description, tags) {
    this.type = type;
    this.description = description;
    this.tags = tags;
  }

  getType() {
    return this._type;
  }

  getDescription() {
    return this._description;
  }

  getTags() {
    return this._tags;
  }

  hasTag = (value) => {
    for (const tag in this.tags) {
      if (this.tags[tag] === value) {
        return true;
      }
    }
    return false;
  };
}
