const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT || '8080', () => {
  console.log(`Running in port ${process.env.PORT || '8080'}`);
});
