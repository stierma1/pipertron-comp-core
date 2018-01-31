var Component = require("pipertron").Component;

var jsonParse = new Component({name:"JSON_PARSE", token:"JSON_PARSE", expression:"jsonParseExpression", args:["optionalWhiteSpace"], action: function(yy, obs, pipe, white, token){
  return obs.map((r) => {
    return JSON.parse(r)
  })
}});

module.exports = {
  component:jsonParse,
  dependencies:{}
};
