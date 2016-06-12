var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: {type: String, required: true},
	commentnum: {type: Number, required: true, default: 0},
	viewnum: {type: Number, required: true, default: 0},
	listContent: {type: String, required: true},
	article: {type: String, required: true},
	tag: {type: String, required: true},
	time: {date: Date, year:String, month:String, day: String, minute: String}
});

mongoose.model("Article", ArticleSchema);
/*export default mongoose.model("Technology", TechnologySchema);*/

