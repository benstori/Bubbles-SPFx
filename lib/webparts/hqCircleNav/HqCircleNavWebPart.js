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
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var sp_loader_1 = require("@microsoft/sp-loader");
var HqCircleNav_module_scss_1 = require("./HqCircleNav.module.scss");
var strings = require("hqCircleNavStrings");
require("jquery");
require("bootstrap");
var dir = require('./assets/multiple-users-silhouette_64.png');
var citations = require('./assets/citations.png');
var cabin = require('./assets/cabin.png');
var esop = require('./assets/esop.png');
var post = require('./assets/post-it.png');
var HqCircleNavWebPart = (function (_super) {
    __extends(HqCircleNavWebPart, _super);
    function HqCircleNavWebPart(context) {
        var _this = _super.call(this) || this;
        //SPComponentLoader.loadCss("./HqBubbles.module.scss");
        sp_loader_1.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css");
        return _this;
    }
    HqCircleNavWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + HqCircleNav_module_scss_1.default.hqCircleNav + "\">\n        <div class=\"" + HqCircleNav_module_scss_1.default.container + "\">\n        <!-- HOME -->\n        \n          <div class=\"" + HqCircleNav_module_scss_1.default.circle2 + "\">\n          <a href=\"" + sp_lodash_subset_1.escape(this.properties.homeURL) + "\"> \n             <div class=\"" + HqCircleNav_module_scss_1.default.txt + "\">hq</div></a>\n          </div>\n        \n        <!-- employee Directory -->\n        <div class=\"" + HqCircleNav_module_scss_1.default.circle + "\">\n          <a href=\"" + sp_lodash_subset_1.escape(this.properties.circle1Url) + "\">\n             <img src=\"" + sp_lodash_subset_1.escape(this.properties.iconLocation) + "\" class=\"" + HqCircleNav_module_scss_1.default.icon + "\" alt=\"directory\" />\n               <div class=\"" + HqCircleNav_module_scss_1.default.overlay + "\">\n                  <div class=\"" + HqCircleNav_module_scss_1.default.text + "\">" + sp_lodash_subset_1.escape(this.properties.hoverText) + "</div>\n               </div>\n            </a>\n        </div>\n\n\n\n        <!-- Citations -->\n        <div class=\"" + HqCircleNav_module_scss_1.default.circle + "\">\n          <a href=\"" + sp_lodash_subset_1.escape(this.properties.circle2Url) + "\">\n           <img src=\"" + sp_lodash_subset_1.escape(this.properties.icon2Location) + "\" class=\"" + HqCircleNav_module_scss_1.default.icon + "\" alt=\"citations\" />\n            <div class=\"" + HqCircleNav_module_scss_1.default.overlay + "\">\n               <div class=\"" + HqCircleNav_module_scss_1.default.text + "\">" + sp_lodash_subset_1.escape(this.properties.hover2Text) + "</div>\n            </div>\n          </a>\n        </div>\n\n        <!-- Cabins -->\n        <div class=\"" + HqCircleNav_module_scss_1.default.circle + "\">\n          <a href=\"" + sp_lodash_subset_1.escape(this.properties.circle3Url) + "\">\n          <img src=\"" + sp_lodash_subset_1.escape(this.properties.icon3Location) + "\"  class=\"" + HqCircleNav_module_scss_1.default.icon + "\" alt=\"cabins\" />\n            <div class=\"" + HqCircleNav_module_scss_1.default.overlay + "\">\n              <div class=\"" + HqCircleNav_module_scss_1.default.text + "\">" + sp_lodash_subset_1.escape(this.properties.hover3Text) + "</div>\n            </div>\n          </a>\n        </div>\n\n        <!-- ESOP -->\n        <div class=\"" + HqCircleNav_module_scss_1.default.circle + "\">\n        <a href=\"" + sp_lodash_subset_1.escape(this.properties.circle4Url) + "\">\n           <img src=\"" + sp_lodash_subset_1.escape(this.properties.icon4Location) + "\" class=\"" + HqCircleNav_module_scss_1.default.icon + "\" alt=\"ESOP\" />\n            <div class=\"" + HqCircleNav_module_scss_1.default.overlay + "\">\n              <div class=\"" + HqCircleNav_module_scss_1.default.text + "\">" + sp_lodash_subset_1.escape(this.properties.hover4Text) + "</div>\n            </div>\n           </a>\n        </div>\n\n        <!-- Post-It -->\n        <div class=\"" + HqCircleNav_module_scss_1.default.circle + "\">\n        <a href=\"" + sp_lodash_subset_1.escape(this.properties.circle1Url) + "\">\n           <img src=\"" + sp_lodash_subset_1.escape(this.properties.icon5Location) + "\" class=\"" + HqCircleNav_module_scss_1.default.icon + "\" alt=\"post it\" />\n            <div class=\"" + HqCircleNav_module_scss_1.default.overlay + "\">\n              <div class=\"" + HqCircleNav_module_scss_1.default.text + "\">" + sp_lodash_subset_1.escape(this.properties.hover5Text) + "</div>\n            </div>\n           </a>\n        </div>\n\n      </div>  \n          \n        </div>\n      </div>";
    };
    Object.defineProperty(HqCircleNavWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HqCircleNavWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('homeURL', {
                                    label: 'HQ HOME URL'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('circle1Url', {
                                    label: 'Hyperlink for Circle 1'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('iconLocation', {
                                    label: 'Icon Image URL'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('hoverText', {
                                    label: 'Hover Text for Icon'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('circle2Url', {
                                    label: 'Hyperlink for Circle #2'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('icon2Location', {
                                    label: 'Icon Image URL #2'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('hover2Text', {
                                    label: 'Hover Text for Icon #2'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('circle3Url', {
                                    label: 'Hyperlink for Circle 3'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('icon3Location', {
                                    label: 'Icon Image URL 3'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('hover3Text', {
                                    label: 'Hover Text for Icon #3'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('circle4Url', {
                                    label: 'Hyperlink for Circle 4'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('icon4Location', {
                                    label: 'Icon Image URL 4'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('hover4Text', {
                                    label: 'Hover Text for Icon #4'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('circle5Url', {
                                    label: 'Hyperlink for Circle 5'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('icon5Location', {
                                    label: 'Icon Image URL 5'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('hover5Text', {
                                    label: 'Hover Text for Icon #5'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HqCircleNavWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HqCircleNavWebPart;

//# sourceMappingURL=HqCircleNavWebPart.js.map
