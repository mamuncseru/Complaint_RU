const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});

const DB1 = process.env.DATABASE1.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
mongoose.connect(DB1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('DB1 connection successful!');
});


//server running from here

const port = process.env.port || 8000
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})