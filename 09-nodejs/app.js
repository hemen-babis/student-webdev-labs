const http = require('http');
const static = require('node-static');
const querystring = require('node:querystring');

const port = process.env.PORT || 5002;
const file = new static.Server('./exercise');

const server = http.createServer((req, res) => {
  // home Route
  if (req.method === 'GET' && req.url === '/') {
    file.serveFile('/welcome.html', 200, {}, req, res);
  }
  
  // form page route (shows the form)
  else if (req.method === 'GET' && req.url === '/form') {
    file.serveFile('/form.html', 200, {}, req, res);
  }
  
  // form submission route (processes the data)
  else if (req.method === 'POST' && req.url === '/formExerciseSubmit') {
    let body = '';

    // listen for data chunks coming from the form
    req.on('data', (chunk) => {
      body += chunk;
    });

    // when all data is received
    req.on('end', () => {
      const userdata = querystring.parse(body);
      
      // destructure using the 'name' attributes from our HTML
      const { usernameInput: name, emailInput: email } = userdata;

      // send the response back to the browser
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h3>Thank you for submitting your information:</h3>`);
      res.write(`<p>Name: ${name}</p>`);
      res.write(`<p>Email: ${email}</p>`);
      res.end();
    });
  }
  
  // fallback for other files (CSS, etc) or 404
  else {
    file.serve(req, res);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});