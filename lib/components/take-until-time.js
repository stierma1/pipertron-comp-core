var Component = require("pipertron").Component;

var timeout = new Component({name:"TAKE_UNTIL_TIME", token:"TAKE_UNTIL_TIME", expression:"takeUntilTimeExpression", args:["WHITE_SPACE", "json", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, white, amount){

  return obs.takeUntil(yy.LIBS.Rx.Observable.timer(parseInt(amount)));
}});

module.exports = {
  component:timeout,
  dependencies:{}
};
