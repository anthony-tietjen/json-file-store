const fs = require('fs');

function readAllObjectsFromFileSync(path){
	return JSON.parse(fs.readFileSync(path, 'utf8'));
}

module.exports.getAllSync = function(path) {
	return getAllObjectsSync(path);
}

module.exports.getSync = function(path, key, value) {
	return getAllObjectsSync(path).filter(object => object[key] == value)[0];
}