/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { MetricsPanelCtrl } from 'app/plugins/sdk';
export declare class GrafanaPluginTemplateCtrl extends MetricsPanelCtrl {
    private $rootScope;
    static templateUrl: string;
    constructor($scope: any, $injector: any, $rootScope: any);
}
