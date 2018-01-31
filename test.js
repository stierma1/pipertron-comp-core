
require("./index")

var PiperTron = require("pipertron").PiperTron;

var libs = {Rx: require("@reactivex/rxjs"), PipeRegistry:{}, inlets:{}};
var parser = PiperTron.buildFromRegistry(libs);
libs.pipertronInstance = parser;

libs.PipeRegistry.test = '| LABEL "impressed"'


parser.execute('JUST {"hello": "world"} | SELECT_SHALLOW "hello" | LABEL "people" | MERGE ( JUST 5 | MERGE ( JUST 5 ) | LABEL "stuff" | TAKE 2 ) | ACCUMULATIVE_MERGE_OBJECTS ').subscribe((v) => {
  console.log(v)
});

parser.execute('JUST {"hello": "world"} | MERGE ( JUST 7 | USE_PIPE_REGISTRY "test" ) | ACCUMULATIVE_MERGE_OBJECTS | JSON_STRINGIFY | JSON_PARSE').subscribe((v) => {
  console.log(v)
});
