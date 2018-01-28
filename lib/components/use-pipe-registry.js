
var Component = require("pipertron").Component;

var USE_PIPE_REGISTRY = new Component({name:"USE_PIPE_REGISTRY", token:"USE_PIPE_REGISTRY", expression:"usePipeRegistryExpression", args:[ "jsonCollection", "optionalWhiteSpace"], action: function(yy, obs, pipe, white, token, names){

  var pipes = names.map((name) => {
    var inletId = Math.random();
    yy.LIBS.inlets[inletId] = obs.map((x) => {return x}); //avoid sync error
    var piperString = yy.LIBS.PipeRegistry[name];
    var runtimePiperString = "INLET " + inletId.toString() + " " + piperString;
    var pipertronInstance = yy.LIBS.pipertronInstance;
    return pipertronInstance.execute(runtimePiperString);
  });

  return yy.LIBS.Rx.Observable.merge(pipes).flatMap((x) => {return x});
}});

module.exports = {
  component:USE_PIPE_REGISTRY,
  dependencies:{}
};
