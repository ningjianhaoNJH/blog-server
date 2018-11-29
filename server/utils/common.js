module.exports = {
    gettype(o) {
        const t = Object.prototype.toString;
        return t.call(o)
    }
}
