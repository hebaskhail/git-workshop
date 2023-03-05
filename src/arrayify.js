

function arrayify(data = []) {
 
    return Array.isArray(data) ? data : [data]

}

module.exports = arrayify;