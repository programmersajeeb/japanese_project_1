const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hxa3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

async function run() {
	try {
		await client.connect();
		const database = client.db('courierServices');
		const slideCollection = database.collection('slides');
		const productsCollection = database.collection('products');
		const announcementCollection = database.collection('announcements');
		const reportCollection = database.collection('reports');

		// SLIDES GET API
		app.get('/slides', async (req, res) => {
			const cursor = slideCollection.find({});
			const slides = await cursor.toArray();
			res.send(slides);
		});
		// SLIDES POST API
		app.post('/slides', async (req, res) => {
			const newSlides = req.body;
			const result = await slideCollection.insertOne(newSlides);
			res.json(result);
		});
		// SLIDES DELETE API
		app.delete('/slides/:id', async (req, res) => {
			const id = req.params.id;
			const query = {
				_id: ObjectId(id)
			};
			const result = await slideCollection.deleteOne(query);
			res.json(result);
		})

		// PRODUCTS GET API
		app.get('/products', async (req, res) => {
			const cursor = productsCollection.find({});
			const products = await cursor.toArray();
			res.send(products);
		});
		// PRODUCTS GET SINGEL PRODUCT
		app.get('/products/:id', async (req, res) => {
			const id = req.params.id;
			const query = {
				_id: ObjectId(id)
			};
			const product = await productsCollection.findOne(query);
			res.json(product);
		});
		// PRODUCTS POST API
		app.post('/products', async (req, res) => {
			const newProducts = req.body;
			const result = await productsCollection.insertOne(newProducts);
			res.json(result);
		});
		// PRODUCTS DELETE API
		app.delete('/products/:id', async (req, res) => {
			const id = req.params.id;
			const query = {
				_id: ObjectId(id)
			};
			const result = await productsCollection.deleteOne(query);
			res.json(result);
		})

		// GET API
		app.get('/announcements', async (req, res) => {
			const cursor = announcementCollection.find({}).sort({ date: -1, });
			const announcements = await cursor.toArray();
			res.send(announcements);
		});
		// GET SINGEL PRODUCT
		app.get('/announcements/:id', async (req, res) => {
			const id = req.params.id;
			const query = {
				_id: ObjectId(id)
			};
			const announcement = await announcementCollection.findOne(query);
			res.json(announcement);
		});
		//POST API
		app.post('/announcements', async (req, res) => {
			const newAnnouncements = req.body;
			console.log(newAnnouncements);
			const result = await announcementCollection.insertOne(newAnnouncements);
			res.json(result);
		});
		// DELETE API
		app.delete('/announcements/:id', async (req, res) => {
			const id = req.params.id;
			const query = {
				_id: ObjectId(id)
			};
			const result = await announcementCollection.deleteOne(query);
			res.json(result);
		})
		// GET API
		app.get('/reports', async (req, res) => {
			// var sort = {time: -1 };
			const findReport = reportCollection.find({}).sort({ date: -1, });
			const reports = await findReport.toArray();
			res.send(reports);
			res.json(reports);
		});
		//POST API
		app.post('/reports', async (req, res) => {
			const newReports = req.body;
			const result = await reportCollection.insertOne(newReports);
			res.json(result);
		});
		// DELETE API
		app.delete('/reports/:id', async (req, res) => {
			const id = req.params.id;
			const query = {
				_id: ObjectId(id)
			};
			const result = await reportCollection.deleteOne(query);
			res.json(result);
		})

	} finally {
		// await client.close();
	}
}
run().catch(console.dir);

app.get('/', (req, res) => {
	res.send('runniing my curd server')
});
app.listen(port, () => {
	console.log('running server on port', port);
});