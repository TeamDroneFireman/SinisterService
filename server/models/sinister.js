module.exports = function(Sinister) {

/*
  Sinister.beforeRemote('*', function(ctx, unused, next) {
    Sinister.app.datasources.userService
    .checkAuth(ctx.req.headers.userid, ctx.req.headers.token,
        function (err, response) {
      if (err || response.error || response.id !== ctx.req.headers.token) {
        var e = new Error('You must be logged in to access database');
        e.status = 401;
        next(e);
      } else {
        next();
      }
    });
  });
*/

  Sinister.findAllMeans = function(cb) {
    var sinisterCode=[
      {
        'code': 'SAP',
        'means': [
          {'count': 1, 'name': 'VSAV'}
        ]
      },
      {
        'code': 'INC',
        'means':[
          {'count': 2,'name':'FPT'},
          {'count': 2,'name':'EPA'},
          {'count': 1,'name':'VLCG'}
        ]
      },
      {
        'code': 'FDF',
        'means':[
          {'count': 4,'name':'CCF'},
          {'count': 1,'name':'CCGC'},
          {'count': 1,'name':'VLHR'}
        ]
      }
    ];
    cb(null, sinisterCode);
  };

  Sinister.findMeansByCode = function(id, cb) {
    var means;
    switch (id){
      case 'SAP' :
        means = [
          {'number': 1,'type':'VSAV'}
        ];
        break;
      case 'INC' :
        means = [
          {'number': 2,'type':'FPT'},
          {'number': 1,'type':'EPA'},
          {'number': 1,'type':'VLCG'}
        ];
        break;
      case 'FDF' :
        means = [
          {'number': 4,'type':'CCF'},
          {'number': 1,'type':'CCGC'},
          {'number': 1,'type':'VLHR'}
        ];
        break;
      default :
        means =[];
    }
    cb(null, means);
  };

  /**
   * Remote method
   */
  Sinister.remoteMethod('findAllMeans', {
    description: 'Find all instances of the model '+
    'from the data source and return there code.',
    accessType: 'READ',
    accepts: null,
    returns: {type: 'array', root: true},
    http: {verb: 'get', path: '/'}
  });

};
