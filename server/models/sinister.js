module.exports = function(Sinister) {

  Sinister.findCode = function(cb) {
    var sinisterCode = ["SAP","INC","FDF"];
    cb(null, sinisterCode);
  };

  Sinister.findMeansByCode = function(code, cb) {
    var means;
    switch (code){
      case "SAP" :
        means = [
          {"number": 1,"type":"VSAV"}
        ];
        break;
      case "INC" :
        means = [
          {"number": 2,"type":"FPT"},
          {"number": 1,"type":"EPA"},
          {"number": 1,"type":"VLCG"}
        ];
        break;
      case "FDF" :
        means = [
          {"number": 4,"type":"CCF"},
          {"number": 1,"type":"CCGC"},
          {"number": 1,"type":"VLHR"}
        ];
        break;
      default :
        means =[];
    }
    cb(null, means);
  };

  Sinister.remoteMethod('findCode', {
    description: 'Find all instances of the model from the data source and return there code.',
    accessType: 'READ',
    accepts: null,
    returns: {type: 'array', root: true},
    http: {verb: 'get', path: '/code'}
  });

  Sinister.remoteMethod('findMeansByCode', {
    description: 'Return all the default means for one sinister code',
    accessType: 'READ',
    accepts: {arg: 'code', type: 'string', http: { source: 'query' } },
    returns: {type: 'array', root: true},
    http: {verb: 'get', path: '/means'}
  });
};
