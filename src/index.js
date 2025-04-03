const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src/public'));
app.use('/api', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app; // สำหรับการทดสอบ