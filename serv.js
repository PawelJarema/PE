var connect = require('connect'),
    serveStatic = require('serve-static'),
    modRewrite = require('connect-modrewrite');

connect()
  .use(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.jpg|\\.png$ /index.html [L]']))
  .use(serveStatic(__dirname)).listen(8080, function() {
    console.log('site on 8080');
  });