import express from 'express';

var app = express();

app.listen(3001, () => (
    console.log('The server is running!!')
));    

// Let's define an endpoint
app.get('/', (req, res) => { 
    //Here we go if this endpoint is called (e.g. from browser)
    res.send('<h1>You just called root endpoint!!</h1>');
});

//Another endpoint
app.get('/customer', (req, res) => {
    res.send('Getting user information');
});

app.get('/genre', (req, res) => {
    res.send('genre information')
});

app.get('/favorite', (req, res) => {
    res.send('favorite movie')
})

app.get('/movie', (req, res) => {
    res.send('movie information')
})

app.get('/review', (req, res) => {
    res.send('movie review')
})






