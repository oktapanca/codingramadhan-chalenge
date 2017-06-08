// ==============ROUTE.JS===============
const http = require('http');
const express = require('express');
const app = express();

let personData = [{
    name: 'Budi',
    age: '42',
    origin: 'Jawa Barat'
}, {
    name: 'Wati',
    age: '50',
    origin: 'Sulawesi Tenggara'
}, {
    name: 'Dona',
    age: '33',
    origin: 'DI Aceh'
}, {
    name: 'Made',
    age: '36',
    origin: 'Bali'
}, {
    name: 'Donal',
    age: '65',
    origin: 'Nusa Tenggara Barat'
}];

let ageAverage = (data) => {
	// Get Sum Use ECMAScript
    let sum = personData.reduce(function(a, b) {
        return a + parseInt(b.age);
    }, 0);
    // Return average
    return sum / data.length;
};
app.get('/average', function(req, res) {
    res.json({ average: ageAverage(personData) });
});
app.listen(3000, function() {
    console.log("Sedang berjalan pada port 3000");
});