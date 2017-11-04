"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iterall_1 = require("iterall");
function createIterableFromPromise(promise) {
    var isResolved = false;
    return promise.then(function (value) {
        if (iterall_1.isAsyncIterable(value)) {
            return value;
        }
        return _a = {
                next: function () {
                    if (!isResolved) {
                        isResolved = true;
                        return Promise.resolve({ value: value, done: false });
                    }
                    return Promise.resolve({ value: undefined, done: true });
                },
                return: function () {
                    isResolved = true;
                    return Promise.resolve({ value: undefined, done: true });
                },
                throw: function (e) {
                    isResolved = true;
                    return Promise.reject(e);
                }
            },
            _a[iterall_1.$$asyncIterator] = function () {
                return this;
            },
            _a;
        var _a;
    });
}
exports.createIterableFromPromise = createIterableFromPromise;
//# sourceMappingURL=promise-to-iterable.js.map