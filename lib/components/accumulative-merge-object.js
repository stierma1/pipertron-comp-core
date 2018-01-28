var accumulativeMerge = require("./../utils").accumulativeMerge;
var Component = require("pipertron").Component;

var accMerge = new Component({name:"ACCUMULATIVE_MERGE_OBJECTS", token:"ACCUMULATIVE_MERGE_OBJECTS", expression:"accumulativeMergeObjectsExpression", args:["optionalWhiteSpace"], action: function(yy, obs, pipe, white, token){
  return obs.toArray().map((arr) => {
    return arr.reduce((red, val) => {
      accumulativeMerge(val, red);
      return red;
    }, {})
  })
}});

module.exports = {
  component:accMerge,
  dependencies:{}
};
