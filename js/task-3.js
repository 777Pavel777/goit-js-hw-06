`use strict`;

class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = str + this.#value;
    return str;
  }

  padEnd(str) {
    this.#value = this.#value + str;
    return str;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
    return str;
  }
  padScobeStart(str) {
    this.#value = str + this.#value;
    return str;
  }

  padScobeEnd(str) {
    this.#value = this.#value + str;
    return str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue());

builder.padStart("^");
console.log(builder.getValue());

builder.padEnd("^");
console.log(builder.getValue());

builder.padBoth("=");
console.log(builder.getValue());

builder.padScobeStart("(");
console.log(builder.getValue());

builder.padScobeEnd(")");
console.log(builder.getValue());
