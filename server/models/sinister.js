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
          {'count': 1, 'name': 'VSAV'},
          {'count': 0,'name':'FPT'},
          {'count': 0,'name':'EPA'},
          {'count': 0,'name':'VLCG'},
          {'count': 0,'name':'CCF'},
          {'count': 0,'name':'CCGC'},
          {'count': 0,'name':'VLHR'},
          {'count': 0,'name':'DRONE'}
        ]
      },
      {
        'code': 'INC',
        'means':[
          {'count': 2,'name':'FPT'},
          {'count': 2,'name':'EPA'},
          {'count': 1,'name':'VLCG'},
          {'count': 0,'name':'CCF'},
          {'count': 0,'name':'CCGC'},
          {'count': 0,'name':'VLHR'},
          {'count': 0,'name':'VSAV'},
          {'count': 0,'name':'DRONE'}
        ]
      },
      {
        'code': 'FDF',
        'means':[
          {'count': 4,'name':'CCF'},
          {'count': 1,'name':'CCGC'},
          {'count': 1,'name':'VLHR'},
          {'count': 0,'name':'VSAV'},
          {'count': 0,'name':'FPT'},
          {'count': 0,'name':'EPA'},
          {'count': 0,'name':'VLCG'},
          {'count': 0,'name':'DRONE'}

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
          {'count': 1,'name':'VSAV'}
        ];
        break;
      case 'INC' :
        means = [
          {'count': 2,'name':'FPT'},
          {'count': 1,'name':'EPA'},
          {'count': 1,'name':'VLCG'}
        ];
        break;
      case 'FDF' :
        means = [
          {'count': 4,'name':'CCF'},
          {'count': 1,'name':'CCGC'},
          {'count': 1,'name':'VLHR'}
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
