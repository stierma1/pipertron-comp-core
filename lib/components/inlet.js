
var Component = require("pipertron").Component;

var inlet = new Component({type:"start",name:"INLET", token:"INLET", expression:"inletExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, token, white, inletId){
  var runtimeInlet = yy.LIBS.inlets[inletId];
  if(runtimeInlet){
    delete yy.LIBS.inlets[inletId]
  }
  return runtimeInlet;
}});

module.exports = {
  component:inlet,
  dependencies:{}
};
