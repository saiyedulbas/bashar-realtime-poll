                const mongoose = require('mongoose');
                const keys = require('./keys');

                
          mongoose.Promise = global.Promise;

              mongoose
                .connect('mongodb+srv://bashar:7XTV55KW@cluster0-5zahv.mongodb.net/pusherpoll?retryWrites=true&w=majority')
                .then(() => alert('MongoDB Connected'))
                .catch(err => console.log(err));
