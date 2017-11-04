"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var sinon = require("sinon");
var iterall_1 = require("iterall");
var rejection_iterable_1 = require("../utils/rejection-iterable");
describe('createRejectionIterable', function () {
    it('should return a valid AsyncIterator from Promise', function () {
        var iterator = rejection_iterable_1.createRejectionIterable(new Error('test error'));
        chai_1.expect(iterall_1.isAsyncIterable(iterator)).to.eq(true);
    });
    it('should not trigger next callback, only catch error', function (done) {
        var iterator = rejection_iterable_1.createRejectionIterable(new Error('test error'));
        var spy = sinon.spy();
        var doneSpy = sinon.spy();
        iterall_1.forAwaitEach(iterall_1.createAsyncIterator(iterator), spy)
            .then(doneSpy)
            .catch(function (e) {
            chai_1.expect(e.message).to.eq('test error');
            chai_1.expect(spy.callCount).to.eq(0);
            chai_1.expect(doneSpy.callCount).to.eq(0);
            done();
        });
    });
    it('next promise should always reject', function (done) {
        var iterator = rejection_iterable_1.createRejectionIterable(new Error('test error'));
        var spy = sinon.spy();
        iterator.next()
            .then(spy)
            .catch(function (e) {
            chai_1.expect(e.message).to.eq('test error');
            chai_1.expect(spy.callCount).to.eq(0);
            done();
        });
    });
});
//# sourceMappingURL=rejection-iterable.js.map