browser(name, spinner, file) {
	// use express
	const app = express();
	app.get('/', function (req, res) {
		fs.readFile(file[0], (err, data) => {
			res.send(data.toString('utf8'));
		});
	})
	app.get('/post/', function (req, res) {
		const result = req.query.result;
		const failed = req.query.failed;
		if (result == 0) {
			spinner.fail();
			// failed += 1;
			console.log(`\nTest ${failed} failed\n`)
			// console.log(this.data);
		}
		else if (result == 1) {
			spinner.succeed()
		}
		else {
			spinner.warn()
		}
		res.send("sucess")
	});
	app.get('/js/', (req, res) => {
		fs.readFile("../client/index.js", (err, data) => {
			res.send(data.toString('utf8'));
		});
	})
	app.listen(3000, function () {
		open.open("http://localhost:3000");
	})
}
