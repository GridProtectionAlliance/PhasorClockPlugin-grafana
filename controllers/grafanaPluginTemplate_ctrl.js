///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['app/plugins/sdk'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var sdk_1;
    var GrafanaPluginTemplateCtrl;
    return {
        setters:[
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            }],
        execute: function() {
            //import { varName } from '../js/constants'   // import constants from constant file using this format
            GrafanaPluginTemplateCtrl = (function (_super) {
                __extends(GrafanaPluginTemplateCtrl, _super);
                function GrafanaPluginTemplateCtrl($scope, $injector, $rootScope) {
                    _super.call(this, $scope, $injector);
                    this.$rootScope = $rootScope;
                }
                GrafanaPluginTemplateCtrl.templateUrl = 'partials/module.html';
                return GrafanaPluginTemplateCtrl;
            })(sdk_1.MetricsPanelCtrl);
            exports_1("GrafanaPluginTemplateCtrl", GrafanaPluginTemplateCtrl);
        }
    }
});
//# sourceMappingURL=grafanaPluginTemplate_ctrl.js.map