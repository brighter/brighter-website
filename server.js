var express = require('express'),
    app = express();


app.use('/javascript', express.static(__dirname + '/javascript') );
app.use('/css', express.static(__dirname + '/css') );
app.use('/img', express.static(__dirname + '/img') );

app.get('/', function(req,res) {
	res.sendfile('index.html');
	console.log("Sent index.html");

});
app.get('/bottle', function(req,res) {
	res.sendfile('bottle.html');
	console.log("Sent bottle.html");

});

// all other requests are handled by redirecting the browser back to the
// root path and tacking on the URL's path as the fragment;
// e.g. "/foo/" => "/#/foo/".

app.get('*', function (req, res){
	res.redirect(302, "/#" + req.url);
});


app.listen(process.env.PORT || 3000);

console.log("app started");