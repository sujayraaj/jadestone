exports.__express = function (filePath, options, callback) {
    return callback(null,require(filePath)(options).replace(/>\s+</g,'><'));
};