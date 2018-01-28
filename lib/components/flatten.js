var Component = require("pipertron").Component;

var flatten = new Component({name:"FLATTEN", token:"FLATTEN", expression:"flattenExpression", args:["optionalWhiteSpace"], action: function(yy, obs, pipe, white, token){
  return obs.flatMap((x) => {
    return x;
  });
}});

module.exports = {
  component:flatten,
  dependencies:{}
};
