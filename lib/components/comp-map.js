var Component = require("pipertron").Component;

var compMap = new Component({name:"COMP_MAP", token:"COMP_MAP", expression:"compMapExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, name){
  return obs.map((r) => {
    var func = yy.LIBS.FunctionRegistry[name];
    if(!func){
      throw new Error("Function [" + name + "] not defined in function registry")
    }
    return func(r);
  })
}});

module.exports = {
  component:compMap,
  dependencies:{}
};
