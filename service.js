const path = require('path');
const express = require('express');
const express_app = express();

express_app.set('views', path.join(__dirname, 'dist/client'));
express_app.set('view engine', 'html');

express_app.use(express.static(path.join(__dirname, 'dist/client')));

express_app.get('/', (req, res) => {
  res.sendFile('dist/client/index.html', {
    root: __dirname
  });
});

express_app.listen(3000, () => {
  console.log(`Server running at port 3000...`);
});
