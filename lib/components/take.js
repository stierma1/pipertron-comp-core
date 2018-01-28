var Component = require("pipertron").Component;

var take = new Component({name:"TAKE", token:"TAKE", expression:"takeExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, amount){
  return obs.take(amount);
}});

module.exports = {
  component:take,
  dependencies:{}
};
