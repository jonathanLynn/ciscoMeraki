//Claim Licenses 

function getLicense() {
    var request = require('request');
    var options = {
    'method': 'POST',
    'url': 'https://api.meraki.com/api/v0/networks/{{networkId}}/devices/claim',
    'headers': {
        'Accept': '*/*',
        'Content-Type': 'application/json'
               },
    body: JSON.stringify({"serials":["Q234-ABCD-0001","Q234-ABCD-0002","Q234-ABCD-0003"]})

    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    });
    }

//Create a New Network within your Organisation

function createNetwork() {
    var request = require('request');
    var options = {
    'method': 'PUT',
    'url': 'https://api.meraki.com/api/v0/networks/{{networkId}}/devices/{{serial}}',
    'headers': {
    'Accept': '*/*',
    'Content-Type': 'application/json'
               },
    body: JSON.stringify({"name":"My AP","lat":37.4180951010362,"lng":-122.098531723022,"serial":"Q234-ABCD-5678","mac":"00:11:22:33:44:55","tags":" recently-added "})

                  };
    request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    });
    }

//Add Devices to Network

