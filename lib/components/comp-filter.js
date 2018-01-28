var Component = require("pipertron").Component;

var compFilter = new Component({name:"COMP_FILTER", token:"COMP_FILTER", expression:"compFilterExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, name){
  return obs.filter((r) => {
    var func = yy.LIBS.FunctionRegistry[name];
    if(!func){
      throw new Error("Function [" + name + "] not defined in function registry")
    }
    return func(r);
  })
}});

module.exports = {
  component:compFilter,
  dependencies:{}
};
