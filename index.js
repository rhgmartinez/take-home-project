const http = require("http");
const app = require("./app");
const mongoose = require('mongoose');
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
mongoose.connect('mongodb://localhost:27017/relationships',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
