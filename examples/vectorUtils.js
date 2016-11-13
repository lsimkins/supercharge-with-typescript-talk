"use strict";
// vectorUtils.ts
var VectorUtils;
(function (VectorUtils) {
    function magnitude(vector) {
        return Math.sqrt(vector.map(Math.pow).reduce(function (a, b) { return a + b; }));
    }
    VectorUtils.magnitude = magnitude;
    function normalize(vector) {
        var magnitude = VectorUtils.magnitude(vector);
        return vector.map(function (n) { return n / magnitude; });
    }
    VectorUtils.normalize = normalize;
})(VectorUtils = exports.VectorUtils || (exports.VectorUtils = {}));
