// SETUP
// =============================================================================
let express    = require('express');
let bodyParser = require('body-parser');
let app        = express();
let morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000; // set our port

// ROUTES FOR OUR API
// =============================================================================

let router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// logging
	next();
});

// test route to make sure everything is working
// (accessed at GET http://localhost:3000/api)
// router.get('/', function(req, res) {
// 	res.json({ message: 'hooray! welcome to our api!' });
// });

// Our default server store
// ----------------------------------------------------
let contributors = [
  { id: 35, firstName: "Mark", lastName: "Spencer", photo:"https://placekitten.com/200/201" },
  { id: 89, firstName: "Jordan", lastName: "Salinger", photo:"https://placekitten.com/200/202" },
  { id: 90, firstName: "Carl", lastName: "Jung", photo:"https://placekitten.com/200/203" },
  { id: 11, firstName: "Dwight", lastName: "Eisenhower", photo:"https://placekitten.com/200/204" },
  { id: 22, firstName: "Walter", lastName: "White", photo:"https://placekitten.com/200/205" },
  { id: 67, firstName: "Roger", lastName: "Rabbit", photo:"https://placekitten.com/200/206" },
  { id: 98, firstName: "Pen", lastName: "Pineapple", photo:"https://placekitten.com/200/207" }
];

// routes that end in /contributors
// ----------------------------------------------------
router.route('/contributors')

	.get(function(req, res) {
		res.json(contributors);
	})

	.post(function(req, res) {
		contributors = req.body;
   	res.send(contributors);
	});

router.route('/contributors/:id')
	.delete(function(req, res) {
		let id = parseInt(req.params.id);
		let newArray = [];
		contributors.forEach(obj => {
			if (obj.id !== id) newArray.push(obj);
		});
		contributors = newArray;
		res.json(contributors);
	});

// REGISTER ROUTES & HOST STATIC FILES
// =============================================================================
app.use('/api', router);
app.use(express.static('public'));
app.use(express.static('views'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port: ' + port);
