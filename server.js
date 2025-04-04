const app = require('./src/app'); // ✅ นำเข้า app.js ที่แยกไว้

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
