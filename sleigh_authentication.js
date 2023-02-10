function Sleigh() {}
//The two parameters must match exactly that of name is "Santa Claus" and password is "Ho Ho Ho!", characters and case; otherwise, access is denied (false)
Sleigh.prototype.authenticate = function(name, password) {
  if(name === 'Santa Claus' && password === 'Ho Ho Ho!' ){
    return true; 
  }
    return false;
};
