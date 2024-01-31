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
    padScobe1(str) {
        this.#value = str + this.#value;
        return str;
    }

        padScobe2(str) {
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

builder.padScobe1("(");
console.log(builder.getValue());

builder.padScobe2(")");
console.log(builder.getValue());
