//******************************************************************************************************
//  phasorClock_ctrl.ts - Gbtc
//
//  Copyright © 2017, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  12/08/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
const sdk_1 = require("app/plugins/sdk");
//import { varName } from '../js/constants'   // import constants from constant file using this format
class PhasorClockCtrl extends sdk_1.MetricsPanelCtrl {
    constructor($scope, $injector, $rootScope) {
        super($scope, $injector);
        this.$rootScope = $rootScope;
        this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
        this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
        this.events.on('render', this.onRender.bind(this));
        this.events.on('panel-initialized', this.onPanelInitialized.bind(this));
        this.events.on('data-received', this.onDataRecieved.bind(this));
        //this.events.on('data-snapshot-load', console.log('data-snapshot-load'));
        this.events.on('data-error', this.onDataError.bind(this));
        this.events.on('refresh', this.onRefresh.bind(this));
    }
    // #region Events from Graphana Handlers
    onInitEditMode() {
        //console.log('init-edit-mode');
    }
    onPanelTeardown() {
        //console.log('panel-teardown');
    }
    onPanelInitialized() {
        //console.log('panel-initialized');
    }
    onRefresh() {
        //console.log('refresh');
    }
    onResize() {
        var ctrl = this;
        //console.log('refresh');
    }
    onRender() {
        //console.log('render');
    }
    onDataRecieved(data) {
        //console.log('data-recieved');
    }
    onDataError(msg) {
        //console.log('data-error');
    }
}
PhasorClockCtrl.templateUrl = 'partials/module.html';
exports.PhasorClockCtrl = PhasorClockCtrl;
//# sourceMappingURL=phasorClock_ctrl.js.map