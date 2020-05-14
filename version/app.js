const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'Teste openshift - novo app' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
