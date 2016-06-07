var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
	title: {type: String, required: true},
	commentnum: {type: Number, required: true, default: 0},
	viewnum: {type: Number, required: true, default: 0},
	status: {type: String, match: /deleted|active/, default: "active"},
	listcontent: {type: String, required: true},
	content: {type: String, required: true},
	tag: {type: String, required: true},
	createtime: {type: Date, default: Date.now},
	updatetime: {type: Date, default: Date.now}
});

TechnologySchema.path("createtime").get(function(v){
	return formatDateTime(v);
});
TechnologySchema.path("updatetime").get(function(v){
	return formatDateTime(v);
});
TechnologySchema.pre("save", function(next){
	this.updatetime = Date.now;
	next();
});


TechnologySchema.statics.add = function (technologyInfo){
	console.log("in  Technology save ....");
	var TechnologyModel = this;
	var technology = new TechnologyModel();
	technology.title = technologyInfo.title;
	technology.commentnum = technologyInfo.commentnum;
	technology.viewnum = technologyInfo.viewnum;
	technology.listcontent = technologyInfo.listcontent;
	technology.content = technologyInfo.content;
	return technology.save();
};

/*BookSchema.statics.updateById = function* (id, bookInfo){
	console.log("in book update ...");
	console.log(id, bookInfo);
	var BookModel = this;
	var updateBookModel = yield BookModel.findOne({_id: id});
	updateBookModel.name = bookInfo.name;
	updateBookModel.authors = bookInfo.authors.map(v => ({name: v}));
	return updateBookModel.save();
}

BookSchema.statics.removeById = function*(id){
	var Book = this;
	return Book.remove({_id: id});
};
*/
TechnologySchema.statics.findByCondition = function (title){
	var Technology = this;
	return Technology.find({
		"title": new RegExp(title)
	});
}

function formatDateTime(date){
	return new Intl.DateTimeFormat('zh-CN').format(date);
}

mongoose.model("Technology", TechnologySchema);
/*export default mongoose.model("Technology", TechnologySchema);*/

