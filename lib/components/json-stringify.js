var Component = require("pipertron").Component;

var jsonParse = new Component({name:"JSON_STRINGIFY", token:"JSON_STRINGIFY", expression:"jsonStringifyExpression", args:["optionalWhiteSpace"], action: function(yy, obs, pipe, white, token){
  return obs.map((r) => {
    return JSON.stringify(r)
  })
}});

module.exports = {
  component:jsonParse,
  dependencies:{}
};
