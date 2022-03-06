const server = require('../app');
const port = 5000;

server.listen(port, () => {
    console.log(`Socker IO Server running on port ${port}`);
});
