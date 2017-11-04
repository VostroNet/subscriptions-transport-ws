"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var promise_to_iterable_1 = require("../utils/promise-to-iterable");
var iterall_1 = require("iterall");
describe('promiseToIterable', function () {
    it('should return a valid AsyncIterator from Promise', function () { return __awaiter(_this, void 0, void 0, function () {
        var promise, iterator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = Promise.resolve('test value');
                    return [4, promise_to_iterable_1.createIterableFromPromise(promise)];
                case 1:
                    iterator = _a.sent();
                    chai_1.expect(iterall_1.isAsyncIterable(iterator)).to.eq(true);
                    return [2];
            }
        });
    }); });
    it('should return a valid AsyncIterable value when promise resolved', function () { return __awaiter(_this, void 0, void 0, function () {
        var promise, iterator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = Promise.resolve('test value');
                    return [4, promise_to_iterable_1.createIterableFromPromise(promise)];
                case 1:
                    iterator = _a.sent();
                    return [2, iterator.next().then(function (value) {
                            chai_1.expect(value).to.have.property('value');
                            chai_1.expect(value).to.have.property('done');
                            chai_1.expect(value.done).to.eq(false);
                            chai_1.expect(value.value).to.eq('test value');
                        })];
            }
        });
    }); });
    it('value is iterable using forAwaitEach', function () { return __awaiter(_this, void 0, void 0, function () {
        var promise, iterator, itemCallbackCalled;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = Promise.resolve('test value');
                    return [4, promise_to_iterable_1.createIterableFromPromise(promise)];
                case 1:
                    iterator = _a.sent();
                    itemCallbackCalled = false;
                    return [2, iterall_1.forAwaitEach(iterall_1.createAsyncIterator(iterator), function (value) {
                            chai_1.expect(value).to.eq('test value');
                            itemCallbackCalled = true;
                        })
                            .then(function (doneValue) {
                            chai_1.expect(doneValue).to.eq(undefined);
                            chai_1.expect(itemCallbackCalled).to.eq(true);
                        })
                            .catch(function (error) {
                            chai_1.expect(error).to.eq(undefined);
                        })];
            }
        });
    }); });
    it('should return done=true after promise has been resolved', function () { return __awaiter(_this, void 0, void 0, function () {
        var promise, iterator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = Promise.resolve('test value');
                    return [4, promise_to_iterable_1.createIterableFromPromise(promise)];
                case 1:
                    iterator = _a.sent();
                    return [2, iterator.next()
                            .then(function () { return iterator.next(); })
                            .then(function (doneValue) {
                            chai_1.expect(doneValue).to.have.property('value');
                            chai_1.expect(doneValue).to.have.property('done');
                            chai_1.expect(doneValue.done).to.eq(true);
                            chai_1.expect(doneValue.value).to.eq(undefined);
                        })];
            }
        });
    }); });
    it('should return done=true after promise has been resolved', function () { return __awaiter(_this, void 0, void 0, function () {
        var promise, iterator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = Promise.resolve('test value');
                    return [4, promise_to_iterable_1.createIterableFromPromise(promise)];
                case 1:
                    iterator = _a.sent();
                    return [2, iterator.next()
                            .then(function () { return iterator.next(); })
                            .then(function (doneValue) {
                            chai_1.expect(doneValue).to.have.property('value');
                            chai_1.expect(doneValue).to.have.property('done');
                            chai_1.expect(doneValue.done).to.eq(true);
                            chai_1.expect(doneValue.value).to.eq(undefined);
                        })];
            }
        });
    }); });
    it('should reject async iterator promise if given promise rejected', function () { return __awaiter(_this, void 0, void 0, function () {
        var errored, promise, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errored = false;
                    promise = Promise.reject(new Error('test error'));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, promise_to_iterable_1.createIterableFromPromise(promise)];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    errored = true;
                    chai_1.expect(e_1.message).to.equal('test error');
                    return [3, 4];
                case 4:
                    chai_1.expect(errored).to.equal(true);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=promise-to-iterable.js.map