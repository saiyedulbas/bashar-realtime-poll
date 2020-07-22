
        type: String,
        required: trueconst mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const VoteSchema = new Schema({
      os: {required: true
                      },
                  points: {
                  }
        type: String,
        
                                });

                // Create collection and add schema
                const Vote = mongoose.model('Vote', VoteSchema);

                module.exports = Vote;
