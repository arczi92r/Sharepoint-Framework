"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockHttpClient = (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function (restUrl, options) {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ EmployeeId: 'E123', EmployeeName: 'John',
            Experience: 'SharePoint', Location: 'India' },];
    return MockHttpClient;
}());
exports.default = MockHttpClient;

//# sourceMappingURL=MockHttpClient.js.map
