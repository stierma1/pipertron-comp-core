
require("./lib/components/index")
var {pipePhases, pipeReport} = require("./lib/utils");

function mixinCompCore(libs){
  libs.PipeRegistry = {};
  libs.FunctionRegistry = {};
  libs.inlets = {};
  libs.pipertronInstance = null;
  return;
}

module.exports = {
  mixinCompCore,
  pipeReport
}
