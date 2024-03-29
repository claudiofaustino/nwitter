module.exports = function(){
	var db = require('mongoose');
	var Schema = db.Schema;

	var nweet = Schema({
                  autor: [{ type: db.Schema.Types.ObjectId, ref: 'usuarios' }],
		  texto: {type: String, required: true},
		  data:  {type: Date, default: Date.now}
	});

	return db.model('nweets', nweet);
}