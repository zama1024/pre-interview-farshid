String.prototype.endsWith = function(search, position) {
  let endPos = position ? position - 1 : this.length - 1;

  //-------------------------One-liner Solution----------------------------
  // return this.slice(endPos - search.length + 1,endPos + 1) === search;

  //------------------------Alternate Solution-----------------------------
  let compareStr = '';
  for(var i = endPos; i > endPos - search.length ; i--){
    compareStr = this[i] + compareStr;
  }
  console.log(compareStr);
  return compareStr === search;
};
