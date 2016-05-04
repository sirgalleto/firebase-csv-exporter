var firebaseToCsv = require('firebase-to-csv');

firebaseToCsv('https://encuestaionic.firebaseio.com', function(data){
    console.log('Finished');
}, 'respuestas.csv');
