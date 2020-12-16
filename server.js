const DEFAULT_PORT = 3000;

const PORT = process.env.PORT || DEFAULT_PORT;
const app = require('./src/app');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
