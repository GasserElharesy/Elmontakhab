export const TYPE_OF_REQUESTS = {
  food: "Food",
  clothing: "Clothing",
  school_supplies: "School supplies",
  blood_donation: "Blood donation",
  probono: "Probono",
};

export class Request {
  isClaimed = false;
  constructor(id, type, description, tags, quantity) {
    this.quantity = quantity;
    this.id = id;
    this.type = type;
    this.description = description;
    this.tags = tags;
  }

  getQuantity() {
    return this.quantity;
  }

  getType() {
    return this.type;
  }

  getDescription() {
    return this.description;
  }

  getTags() {
    return this.tags;
  }

  getId() {
    return this.id;
  }

  hasTag = (value) => {
    for (const tag in this.tags) {
      if (this.tags[tag] === value) {
        return true;
      }
    }
    return false;
  };

  claim() {
    this.isClaimed = true;
  }
  unClaim() {
    this.isClaimed = false;
  }
}
