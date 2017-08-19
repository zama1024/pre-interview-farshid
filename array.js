Array.prototype.find = function(fn) {
  for (var i = 0; i < this.length; i++) {
    if(fn.call(this, this[i])){
      return this[i];
    }
  }
};

Array.prototype.findIndex = function(fn) {
  return 100
}

Array.prototype.includes = function(search) {
  return false
}
