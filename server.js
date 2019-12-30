const expess = require('express')
const app = expess();
const port = 3000;

const getapi = require('./getApi');
  

// app.get('/fetch/:id', getapi)
app.use('/fetch', getapi)

app.listen(port, () => console.log('Example app listening on port ${port}!'))