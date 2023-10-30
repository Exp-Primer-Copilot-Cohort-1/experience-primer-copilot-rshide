// Create web server to listen for comments and save them to a file

// Import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create server
http.createServer(function (request, response) {
    // Get the path name
    var pathname = url.parse(request.url).pathname;
    // If the path is /comments
    if (pathname == '/comments') {
        // If the request method is POST
        if (request.method == 'POST') {
            // Create a variable to hold the data
            var postData = '';
            // Add a listener for the data event
            request.on('data', function (chunk) {
                // Append the data
                postData += chunk;
            });
            // Add a listener for the end event
            request.on('end', function () {
                // Parse the data
                var postDataObject = qs.parse(postData);
                // Create a variable to hold the data
                var data = '';
                // Add a listener for the read event
                myReadStream.on('readable', function () {
                    // Read the data
                    data += myReadStream.read();
                });
                // Add a listener for the end event
                myReadStream.on('end', function () {
                    // Parse the data
                    var myData = JSON.parse(data);
                    // Add the new comment to the data
                    myData.comments.push(postDataObject);
                    // Create a variable to hold the data
                    var newData = JSON.stringify(myData);
                    // Write the data to the file
                    fs.writeFile('comments.json', newData, function () {
                        // Set the response header
                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        // End the response
                        response.end();
                    });
                });
            });
        } else {
            // Set the response header
            response.writeHead(200, { 'Content-Type': 'text/html' });
            // Create a variable to hold the data
            var data = '';
            // Add a listener for the read event
            myReadStream.on('readable', function () {
                // Read the data
                data += myReadStream.read();
            });
            // Add a listener for the end event
            myReadStream.on('end', function () {
                // Parse the data
                var myData = JSON.parse(data);
                // Create a variable to hold