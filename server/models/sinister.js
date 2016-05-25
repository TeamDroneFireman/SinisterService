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
      {'code': 'DEFAULT_MEANS',
        'means':
          ['VSAV', 'FTP', 'EPA', 'VLCG','CCF','CCGC','VLHR', 'DRONE']
      },
      {'code': 'SAP',
        'means':
          ['VSAV']
        },
      {'code': 'INC',
        'means':
          ['FTP','EPA','VLCG']
      },
      {'code': 'FDF',
        'means':
          ['CCF','CCGC','VLHR']
      }
    ];
    cb(null, sinisterCode);
  };

  Sinister.findMeansByCode = function(id, cb) {
    var means;
    switch (id){
      case 'SAP' :
        means = [
          //{'number': 1,'type':'VSAV'}
          'VSAV'
        ];
        break;
      case 'INC' :
        means = ['FTP','EPA','VLCG'
          //{'number': 2,'type':'FPT'},
          //{'number': 1,'type':'EPA'},
          //{'number': 1,'type':'VLCG'}
        ];
        break;
      case 'FDF' :
        means = ['CCF','CCGC','VLHR'
          //{'number': 4,'type':'CCF'},
          //{'number': 1,'type':'CCGC'},
          //{'number': 1,'type':'VLHR'}
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
