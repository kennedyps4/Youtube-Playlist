/**
 * Created by Praveen Gupta on 19-07-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistSchema = new Schema(
    {
        name: {type: String, required: true},
        desciption: {type: String},
        user:{
            name:{type:String,required:true},
            email: {type: String, required: true},
            imageUrl:{type:String}
        },
        public: {type: Boolean, default: false},
        songs: {type:Array,default:[]},
        created:{type:Date},
        updated:{type:Date}
    }
);
playlistSchema.pre('save', function (next) {
    this.updated = new Date();
    if (!this.created)
        this.created = new Date();
    next();
});
module.exports = mongoose.model('Playlist', playlistSchema, 'playlists');