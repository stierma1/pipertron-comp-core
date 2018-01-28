var Rx = require("@reactivex/rxjs");
var {table} = require('table');
function accMerge(fromObj, accObj){
  for(var i in fromObj){
    if(typeof(fromObj) === "string" || typeof(fromObj) === "number"){
      continue;
    }

    if(!accObj[i]){
      accObj[i] = fromObj[i];
    } else {
      accMerge(fromObj[i], accObj[i]);
    }
  }
}

function pipePhases(initData, pipeString){
  var fullString = "JUST " + JSON.stringify(initData) + " " + pipeString;
  var splits =  fullString.split("|");
  var subpipes = splits.reduce((red, val, idx) => {
    if(idx === 0){
      return red
    }
    red.push({piece:val, execStr:red[idx - 1].execStr + "|" + val});
    return red;
  }, [{piece:splits[0], execStr:splits[0]}])

  return subpipes
}

function runPipes(initData, pipeString, pipertron){
  var phases = pipePhases(initData, pipeString);

  var phasesWithObs = phases.map((val) => {
    val.obs = pipertron.execute(val.execStr).toArray().map((vals) => {
      return {piece:val.piece, returnValues: vals, execStr: val.execStr}
    })
    return val;
  });

  return Rx.Observable.from(phasesWithObs).concatMap((phase) => {
    return phase.obs
  });
}

function pipeReport(initData, pipeString, parser){
  var acc = [];
  var err = null;
  var prom = new Promise((resolve, reject) => {
    runPipes(initData, pipeString, parser).timeout(10000).subscribe((x) => {
      try{
          var ret = JSON.stringify(x.returnValues);
      } catch(e){
          var ret = "[" + x.returnValues + "]"
      }
      x.ret = ret;
      acc.push(x);
    }, (e) => {
      var err = e;
      var data = [["Step", "Return_Value"]];
      for(var i in acc){
        var ret = acc[i].ret
        data.push([acc[i].piece.trim(), ret.substr(1, ret.length - 2)]);
      }
      var goodStr = "INPUT_STRING: " + pipeString + "\n" + "INPUT_DATA: " + JSON.stringify(initData) + "\n" + table(data);
      if(err){
        var nE = new Error(goodStr + "\n" + "BROKEN PIPE: " + e.message + "\n" + "LAST SUCCESSFUL STAGE RECEIVED: " + acc[acc.length-1].execStr + "\nORIGINAL STACK TRACE: " + e.stack );
        reject(nE);
        return;
      }
    }, () => {
      var data = [["Step", "Return_Value"]];
      for(var i in acc){
        var ret = acc[i].ret
        data.push([acc[i].piece.trim(), ret.substr(1, ret.length - 2)]);
      }
      var goodStr = "INPUT_STRING: " + pipeString + "\n" + "INPUT_DATA: " + JSON.stringify(initData) + "\n" + table(data);

      resolve(goodStr)
    })
  })
  return prom;
}

module.exports = {accumulativeMerge: accMerge, pipePhases, pipeReport};
