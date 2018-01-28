var Component = require("pipertron").Component;

var timeout = new Component({name:"TIMEOUT", token:"TIMEOUT", expression:"timeoutExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, amount){
  console.log(parseInt(amount))
  return obs.timeout(parseInt(amount));
}});

module.exports = {
  component:timeout,
  dependencies:{}
};
