let data = {
    "layout": "interior.njk",
    "tags": "stories",
}
if(process.env.NODE_ENV === "production") {
	data.date = "git Last Modified";
}

module.exports = data;