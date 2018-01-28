
require("./lib/components/just");
require("./lib/components/selectShallow");
require("./lib/components/merge");
require("./lib/components/label");
require("./lib/components/to-array");
require("./lib/components/accumulative-merge-object");
require("./lib/components/take");
require("./lib/components/inlet");
require("./lib/components/from-pipe-registry")

var PiperTron = require("pipertron").PiperTron;

var libs = {Rx: require("@reactivex/rxjs"), PipeRegistry:{}, inlets:{}};
var parser = PiperTron.buildFromRegistry(libs);
libs.pipertronInstance = parser;

libs.PipeRegistry.test = 'INLET "<INLET_ID>" | LABEL "impressed"'


parser.execute('JUST {"hello": "world"} | SELECT_SHALLOW "hello" | LABEL "people" | MERGE ( JUST 5 | MERGE ( JUST 5 ) | LABEL "stuff" | TAKE 2 ) | ACCUMULATIVE_MERGE_OBJECTS ').subscribe((v) => {
  console.log(v)
});

parser.execute('JUST {"hello": "world"} | MERGE ( JUST 7 | FROM_PIPE_REGISTRY "test" ) | ACCUMULATIVE_MERGE_OBJECTS').subscribe((v) => {
  console.log(v)
});
