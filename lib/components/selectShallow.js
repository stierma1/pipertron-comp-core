
var Component = require("pipertron").Component;

var selectShallow = new Component({name:"selectShallow", token:"SELECT_SHALLOW", expression:"selectShallowExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, space, token, white, jsonObj){
  return obs.map((data) => {
    return data[jsonObj]
  });
}});

module.exports = {
  component:selectShallow,
  dependencies:{}
};
