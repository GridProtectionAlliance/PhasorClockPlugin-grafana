///<reference path="node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { MetricsPanelCtrl } from 'app/plugins/sdk';

export class GrafanaPluginTemplateCtrl extends MetricsPanelCtrl{
    constructor($scope, $injector, $rootScope) {
        super($scope, $injector);
    }
}