var gith = require('gith').create(9001),
   argv = require('optimist').argv;

var ENVIRONMENTS = ['prod','qa'];

/** Setup & validation **/
var curr_env = null;
if(argv.env) {
   for(var i=0; i<ENVIRONMENTS.length; i++){
      if(ENVIRONMENTS[i]==argv.env) {
         curr_env = argv.env;
      }
   } 
}

console.log('Listening for '+curr_env+' events');

/** Webhooks **/
gith({
   repo: 'crystalschang/mobile-web',
   branch: curr_env
}).on( 'all', function( payload ) {
   exec("RELEASE_ENV="+curr_env);
   
   exec("./scripts/update.sh");
   console.log( 'Post-receive received for: ' + curr_env );
});
    