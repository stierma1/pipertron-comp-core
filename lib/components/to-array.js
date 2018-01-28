var Component = require("pipertron").Component;

var toArray = new Component({name:"TO_ARRAY", token:"TO_ARRAY", expression:"toArrayExpression", args:["optionalWhiteSpace"], action: function(yy, obs, pipe, white, token){
  return obs.toArray()
}});

module.exports = {
  component:toArray,
  dependencies:{}
};
