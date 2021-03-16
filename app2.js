const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      
      res.write('<table><tr><th> Location </th><th> Hours required </th><th> Money required </th></tr>') 
      res.write('<tr><td> TajMahal </td><td> 2hours </td><td> 4000RS </td></tr>')
      res.write('<tr><td>charminar</td><td>3hours</td><td>3000RS</td></tr><tr><td>Golconda fort</td><td>3hours</td><td>2000RS</td></tr>')
      res.write('<tr><td>falaknuma palace</td><td>2hours</td><td>2500Rs</td></tr></table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})