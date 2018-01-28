var Component = require("pipertron").Component;

var compFlatMap = new Component({name:"COMP_FLAT_MAP", token:"COMP_FLAT_MAP", expression:"compFlatMapExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, name){
  return obs.flatMap((r) => {
    var func = yy.LIBS.FunctionRegistry[name];
    if(!func){
      throw new Error("Function [" + name + "] not defined in function registry")
    }
    return func(r);
  })
}});

module.exports = {
  component:compFlatMap,
  dependencies:{}
};
