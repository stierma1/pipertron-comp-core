var Component = require("pipertron").Component;

var interval = new Component({type:"start",name:"INTERVAL", token:"INTERVAL", expression:"intervalExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, token, white, jsonObj){
  return yy.LIBS.Rx.Observable.interval(jsonObj);
}});

module.exports = {
  component:interval,
  dependencies:{}
};
