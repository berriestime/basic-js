/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = "") {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (this._isInvalidPosition(position)) {
      this._clearChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finishedChain = this.chain.join("~~");
    this._clearChain();
    return finishedChain;
  },

  _isInvalidPosition(position) {
    return (
      typeof position !== "number" ||
      position % 1 !== 0 ||
      position <= 0 ||
      position > this.chain.length
    );
  },

  _clearChain() {
    this.chain.length = 0;
  },
};

module.exports = {
  chainMaker,
};
