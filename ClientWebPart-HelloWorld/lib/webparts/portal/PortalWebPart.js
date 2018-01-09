"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var MockHttpClient_1 = require("./MockHttpClient");
var PortalWebPart_module_scss_1 = require("./PortalWebPart.module.scss");
var strings = require("PortalWebPartStrings");
var sp_core_library_2 = require("@microsoft/sp-core-library");
var sp_http_1 = require("@microsoft/sp-http");
window.onload = function () {
    alert("siemanko");
};
var PortalWebPart = (function (_super) {
    __extends(PortalWebPart, _super);
    function PortalWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n <div class=\"" + PortalWebPart_module_scss_1.default.portal + "\">\n <div class=\"" + PortalWebPart_module_scss_1.default.container + "\">\n<div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + PortalWebPart_module_scss_1.default.row + "\">\n <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n <span class=\"ms-font-xl ms-fontColor-white\" style=\"font-size:28px\">Welcome to\nSharePoint Framework Development</span>\n\n<p class=\"ms-font-l ms-fontColor-white\" style=\"text-align: center\">Demo :\nRetrieve Employee Data from SharePoint List</p>\n </div>\n</div>\n <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + PortalWebPart_module_scss_1.default.row + "\">\n <div style=\"background-color:Black;color:white;text-align: center;font-weight:\nbold;font-size:18px;\">Employee Details</div>\n <br>\n<div id=\"spListContainer\" />\n </div>\n </div>\n </div>";
        this._renderListAsync();
    };
    Object.defineProperty(PortalWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    PortalWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    PortalWebPart.prototype._renderListAsync = function () {
        var _this = this;
        if (sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    PortalWebPart.prototype._renderList = function (items) {
        var html = '<table class="TFtable" border=1 width=100% style="border-collapse:collapse;">';
        html +=
            "<th>EmployeeId</th><th>EmployeeName</th><th>Experience</th><th>Location</th>";
        items.forEach(function (item) {
            html += "<tr>\n <td>" + item.EmployeeId + "</td>\n <td>" + item.EmployeeName + "</td>\n <td>" + item.Experience + "</td>\n <td>" + item.Location + "</td>\n</tr>";
        });
        html += "</table>";
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    PortalWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl +
            "/_api/web/lists/GetByTitle('EmployeeList')/Items", sp_http_1.SPHttpClient.configurations.v1).then(function (response) {
            debugger;
            return response.json();
        });
    };
    PortalWebPart.prototype._getMockListData = function () {
        return MockHttpClient_1.default.get(this.context.pageContext.web.absoluteUrl).then(function () {
            var listData = {
                value: [{ EmployeeId: 'E123', EmployeeName: 'John', Experience: 'SharePoint', Location: 'India' },
                    { EmployeeId: 'E567', EmployeeName: 'Martin', Experience: '.NET', Location: 'Qatar' },
                    { EmployeeId: 'E367', EmployeeName: 'Luke', Experience: 'JAVA', Location: 'UK' }]
            };
            return listData;
        });
    };
    return PortalWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = PortalWebPart;

//# sourceMappingURL=PortalWebPart.js.map
