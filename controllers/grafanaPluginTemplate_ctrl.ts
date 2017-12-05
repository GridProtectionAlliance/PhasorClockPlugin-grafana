///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { MetricsPanelCtrl } from 'app/plugins/sdk';

//import { varName } from '../js/constants'   // import constants from constant file using this format

export class GrafanaPluginTemplateCtrl extends MetricsPanelCtrl{
    static templateUrl:string = 'partials/module.html';

    constructor($scope, $injector, private $rootScope) {
        super($scope, $injector);
    }
}