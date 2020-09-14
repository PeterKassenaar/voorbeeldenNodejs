// 0. dependencies
const express = require('express');
const axios = require('axios');

// 1. Express application - we could also have used the built-in 'http' module
const app = express();

// 2. Constants
const welcomeMsg = `
	<h1>This is a sample Express proxy server application</h1>
	<p>make a request to http://localhost/books, and you'll be served the books.json-file from www.kassenaar.com. </p>
	<ul>
		<li>
			<a href="http://localhost:3000/books">http://localhost:3000/books</a>
		</li>
		<li>
			OR: get the books via async/await 
			<a href="http://localhost:3000/books-async">http://localhost:3000/books-async</a>
		</li>
	</ul>
	<p>See the source code in <code>index.js</code> for details.</p>
`;
const remoteUrl = 'https://www.kassenaar.com/data/books.json123'; // the data endpoint that the proxy talks to


// 3. some instructions for the user
app.get('/', ((req, res) => {
	res.send(welcomeMsg);
}));

// 4. The actual proxy. It uses the axios library, available at https://www.npmjs.com/package/axios
app.get('/books', (req, res) => {
	// Get data from the endpoint - note: No CORS configuration on the endpoint necessary (though it won't hurt).
	axios.get(remoteUrl)
		.then(result => res.send(result.data))
		.catch(err => res.send('Error :: ' + err))
});

// 5. We could do the same using async/await, which axios supports
async function getBooksAsync(){
	return axios.get(remoteUrl)
}
// 6. Important!: declare Express route as 'async'
// More info on Express async/await, for instance https://lombardo-chcg.github.io/languages/2017/09/18/express-async-await.html
app.get('/books-async', async (req, res) => {
	try{
		// await the bookdata and return it
		const bookData = await getBooksAsync()
		res.status(200).send(bookData.data)
	} catch (err){
		res.status(500).send('Error! :: ' + err);
	}
})

// 7. Start the server.
app.listen(3000, () => {
	console.log('Server started on port 3000');
})
