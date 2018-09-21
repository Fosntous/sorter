class Sorter {
  constructor() {
    this.order = true;
    this.elements = [];
  }

  add(element) {
    var c = this.length;
    this.elements[c] = element;
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    var ord = this.order;
    var i, j, k, buff;
    var inds = indices;
    /*for(i = 0; i < inds.length; i++){
      for(j = 0; j < inds.length; j++){
        if(inds[i] > inds[j]){
          buff = inds[j];
          inds[j] = inds[i];
          inds[i] = buff;
        }
      }
    }*/
    for(i = 0; i < inds.length; i++){
      for(j = 0; j < inds.length; j++){
        if( (this.elements[inds[i]] < this.elements[inds[j]] && ord)
            ||(this.elements[inds[i]] > this.elements[inds[j]] && !ord)){
          buff = this.elements[inds[j]];
          this.elements[inds[j]] = this.elements[inds[i]];
          this.elements[inds[i]] = buff;
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.order = compareFunction;
  }
}

module.exports = Sorter;
