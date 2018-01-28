var Component = require("pipertron").Component;

var merge = new Component({name:"MERGE", token:"MERGE", args:["WHITE_SPACE", "subExpression", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, val){
  return yy.LIBS.Rx.Observable.merge(obs, val);
}});

module.exports = {
  component:merge,
  dependencies:{}
};
