var Component = require("pipertron").Component;

var just = new Component({type:"start",name:"JUST", token:"JUST", expression:"justExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, token, white, jsonObj){
  return yy.LIBS.Rx.Observable.of(jsonObj);
}});

module.exports = {
  component:just,
  dependencies:{}
};
