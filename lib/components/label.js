var Component = require("pipertron").Component;

var label = new Component({name:"LABEL", token:"LABEL", expression:"labelExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, label){
  return obs.map((r) => {
    var obj = {};
    obj[label] = r;
    return obj;
  })
}});

module.exports = {
  component:label,
  dependencies:{}
};
