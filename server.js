const mongoose = require('mongoose');

const uri = "";
const connect = (mongoose) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(uri, {
        useNewUrlParser: true,
      promiseLibrary: global.Promise
    });
    database.on('error', error => console.log(`Connection to Order Manager database failed: ${error}`));
    database.on('connected', () => console.log('Connected to Order Manager database'));
    database.on('disconnected', () => console.log('Disconnected from Order Manager database'));
    process.on('SIGINT', () => {
      database.close(() => {
        console.log('Order Manager terminated, connection closed');
        process.exit(0);
      })
    });
  };


  connect(mongoose);