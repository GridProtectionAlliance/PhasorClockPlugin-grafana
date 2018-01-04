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
System.register(["app/plugins/sdk", "jquery", "d3", "lodash"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var sdk_1, jquery_1, d3_1, lodash_1, PhasorClockCtrl, CircularHeatChart;
    return {
        setters: [
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (d3_1_1) {
                d3_1 = d3_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }
        ],
        execute: function () {//******************************************************************************************************
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
            //import { varName } from '../js/constants'   // import constants from constant file using this format
            PhasorClockCtrl = (function (_super) {
                __extends(PhasorClockCtrl, _super);
                function PhasorClockCtrl($scope, $injector, $rootScope) {
                    var _this = _super.call(this, $scope, $injector) || this;
                    _this.$rootScope = $rootScope;
                    _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
                    _this.events.on('panel-teardown', _this.onPanelTeardown.bind(_this));
                    _this.events.on('render', _this.onRender.bind(_this));
                    _this.events.on('panel-initialized', _this.onPanelInitialized.bind(_this));
                    _this.events.on('data-received', _this.onDataRecieved.bind(_this));
                    //this.events.on('data-snapshot-load', console.log('data-snapshot-load'));
                    _this.events.on('data-error', _this.onDataError.bind(_this));
                    _this.events.on('refresh', _this.onRefresh.bind(_this));
                    _this.panel.phasorMag = (_this.panel.phasorMag != undefined ? _this.panel.phasorMag : '');
                    _this.panel.phasorAng = (_this.panel.phasorAng != undefined ? _this.panel.phasorAng : '');
                    _this.panel.refMag = (_this.panel.refMag != undefined ? _this.panel.refMag : '');
                    _this.panel.refAng = (_this.panel.refAng != undefined ? _this.panel.refAng : '');
                    _this.panel.numAngSegments = (_this.panel.numAngSegments != undefined ? _this.panel.numAngSegments : 360);
                    _this.panel.numMagSegments = (_this.panel.numMagSegments != undefined ? _this.panel.numMagSegments : 4);
                    _this.panel.magStep = (_this.panel.magStep != undefined ? _this.panel.magStep : 0.5);
                    _this.panel.magStart = (_this.panel.magStart != undefined ? _this.panel.magStart : 0);
                    _this.panel.div = "canvas_" + _this.panel.id;
                    _this.panel.height = _this.row.height;
                    _this.$scope.domElement = '#canvas_' + _this.panel.id;
                    _this.angStepSize = 360 / _this.panel.numAngSegments;
                    _this.elements = [];
                    _this.updateHeatMapObject();
                    return _this;
                }
                // #region Events from Graphana Handlers
                PhasorClockCtrl.prototype.onInitEditMode = function () {
                    this.addEditorTab('Options', 'public/plugins/phasorclock-plugin/partials/editor.html', 2);
                    //console.log('init-edit-mode');
                };
                PhasorClockCtrl.prototype.onPanelTeardown = function () {
                    //console.log('panel-teardown');
                };
                PhasorClockCtrl.prototype.onPanelInitialized = function () {
                    //console.log('panel-initialized');
                };
                PhasorClockCtrl.prototype.onRefresh = function () {
                    //console.log('refresh');
                };
                PhasorClockCtrl.prototype.onResize = function () {
                    var ctrl = this;
                    //console.log('refresh');
                };
                PhasorClockCtrl.prototype.onRender = function () {
                    //console.log('render');
                };
                PhasorClockCtrl.prototype.onDataRecieved = function (data) {
                    var _this = this;
                    this.elements = data.map(function (a, i) { return { id: i, Name: a.rootTarget }; });
                    var anglePoints = data.find(function (a) { return a.target == _this.panel.phasorAng.Name; });
                    var magPoints = data.find(function (a) { return a.target == _this.panel.phasorMag.Name; });
                    var refAngPoints = data.find(function (a) { return a.target == _this.panel.refAng.Name; });
                    var refMagPoints = data.find(function (a) { return a.target == _this.panel.refMag.Name; });
                    lodash_1.default.each(anglePoints.datapoints, function (d, i) {
                        if (magPoints.datapoints[i][1] == d[1]) {
                            var a = refAngPoints.datapoints[i][0] - d[0];
                            var angle = Math.trunc(_this.fixAngle2(a) / _this.angStepSize) * _this.angStepSize;
                            var mag = Math.trunc((magPoints.datapoints[i][0] / refMagPoints.datapoints[i][0]) / _this.panel.magStep) * _this.panel.magStep;
                            ++_this.heatMap[angle.toString() + '_' + mag.toString()].value;
                        }
                    });
                    var range = ["white", "#01579b"];
                    var inputData = [{ month: 1, type: "Category 1", value: 25 },
                        { month: 2, type: "Category 1", value: 15 },
                        { month: 3, type: "Category 1", value: 27 },
                        { month: 4, type: "Category 1", value: 10 },
                        { month: 5, type: "Category 1", value: 54 },
                        { month: 6, type: "Category 1", value: 23 },
                        { month: 7, type: "Category 1", value: 31 },
                        { month: 8, type: "Category 1", value: 17 },
                        { month: 9, type: "Category 1", value: 8 },
                        { month: 10, type: "Category 1", value: 12 },
                        { month: 11, type: "Category 1", value: 32 },
                        { month: 12, type: "Category 1", value: 35 },
                        { month: 1, type: "Category 2", value: 19 },
                        { month: 2, type: "Category 2", value: 24 },
                        { month: 3, type: "Category 2", value: 27 },
                        { month: 4, type: "Category 2", value: 12 },
                        { month: 5, type: "Category 2", value: 19 },
                        { month: 6, type: "Category 2", value: 30 },
                        { month: 7, type: "Category 2", value: 31 },
                        { month: 8, type: "Category 2", value: 25 },
                        { month: 9, type: "Category 2", value: 20 },
                        { month: 10, type: "Category 2", value: 5 },
                        { month: 11, type: "Category 2", value: 21 },
                        { month: 12, type: "Category 2", value: 10 },
                        { month: 1, type: "Category 3", value: 19 },
                        { month: 2, type: "Category 3", value: 3 },
                        { month: 3, type: "Category 3", value: 32 },
                        { month: 4, type: "Category 3", value: 23 },
                        { month: 5, type: "Category 3", value: 9 },
                        { month: 6, type: "Category 3", value: 17 },
                        { month: 7, type: "Category 3", value: 25 },
                        { month: 8, type: "Category 3", value: 29 },
                        { month: 9, type: "Category 3", value: 32 },
                        { month: 10, type: "Category 3", value: 33 },
                        { month: 11, type: "Category 3", value: 19 },
                        { month: 12, type: "Category 3", value: 24 },
                        { month: 1, type: "Category 4", value: 12 },
                        { month: 2, type: "Category 4", value: 43 },
                        { month: 3, type: "Category 4", value: 12 },
                        { month: 4, type: "Category 4", value: 23 },
                        { month: 5, type: "Category 4", value: 14 },
                        { month: 6, type: "Category 4", value: 19 },
                        { month: 7, type: "Category 4", value: 22 },
                        { month: 8, type: "Category 4", value: 39 },
                        { month: 9, type: "Category 4", value: 22 },
                        { month: 10, type: "Category 4", value: 26 },
                        { month: 11, type: "Category 4", value: 31 },
                        { month: 12, type: "Category 4", value: 25 },
                    ];
                    this.loadCircularHeatMap(this.$scope.domElement, range);
                };
                PhasorClockCtrl.prototype.onDataError = function (msg) {
                    //console.log('data-error');
                };
                // #endregion
                PhasorClockCtrl.prototype.loadCircularHeatMap = function (dom_element_to_append_to, range) {
                    var _this = this;
                    var dataset = Object.keys(this.heatMap).map(function (a) { return _this.heatMap[a]; });
                    var margin = { top: 50, right: 50, bottom: 50, left: 50 };
                    var width = 600 - margin.left - margin.right;
                    var height = width;
                    var innerRadius = width / 14;
                    var numSegments = this.panel.numMagSegments;
                    var segmentHeight = (width - margin.top - margin.bottom - 2 * innerRadius) / (2 * numSegments);
                    var chart = new CircularHeatChart(innerRadius, this.panel.numAngSegments, segmentHeight, range);
                    jquery_1.default(dom_element_to_append_to).children().remove();
                    var svg = d3_1.default.select(dom_element_to_append_to)
                        .selectAll('svg')
                        .data([dataset])
                        .enter()
                        .append('svg')
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append('g')
                        .attr("transform", "translate(" + ((width) / 2 - (numSegments * segmentHeight + innerRadius)) + "," + margin.top + ")")
                        .call(chart.createChart.bind(chart));
                    var tooltip = d3_1.default.select(dom_element_to_append_to)
                        .append('div')
                        .attr('class', 'tooltip');
                    tooltip.append('div')
                        .attr('class', 'month');
                    tooltip.append('div')
                        .attr('class', 'value');
                    tooltip.append('div')
                        .attr('class', 'type');
                    svg.selectAll("path")
                        .on('mouseover', function (d) {
                        tooltip.select('.month').html("<b> Angle: " + d.angle + "</b>");
                        tooltip.select('.type').html("<b> Magnitude: " + d.magnitude + "</b>");
                        tooltip.select('.value').html("<b> Value: " + d.value + "</b>");
                        tooltip.style('display', 'block');
                        tooltip.style('opacity', 2);
                    })
                        .on('mousemove', function (d, i, e) {
                        tooltip.style('top', (d3_1.default.mouse(this)[1] + 200) + 'px')
                            .style('left', (d3_1.default.mouse(this)[0] + 250) + 'px');
                    })
                        .on('mouseout', function (d) {
                        tooltip.style('display', 'none');
                        tooltip.style('opacity', 0);
                    });
                };
                PhasorClockCtrl.prototype.fixAngle = function (angle) {
                    if (angle > -180 && angle <= 180)
                        return angle;
                    else if (angle <= -180)
                        return 360 + angle;
                    else if (angle > 180)
                        return angle - 360;
                };
                PhasorClockCtrl.prototype.fixAngle2 = function (angle) {
                    while (angle < 0)
                        angle += 360;
                    return angle % 360;
                };
                PhasorClockCtrl.prototype.updateHeatMapObject = function () {
                    this.heatMap = {};
                    this.angStepSize = 360 / this.panel.numAngSegments;
                    for (var j = this.panel.magStart; j < (this.panel.numMagSegments * this.panel.magStep + this.panel.magStart); j += this.panel.magStep) {
                        for (var i = 0; i < 360; i += this.angStepSize) {
                            var step = (Math.trunc(j / this.panel.magStep) * this.panel.magStep).toString();
                            this.heatMap[i.toString() + '_' + step] = { angle: i, magnitude: step, value: 0 };
                        }
                    }
                };
                return PhasorClockCtrl;
            }(sdk_1.MetricsPanelCtrl));
            PhasorClockCtrl.templateUrl = 'partials/module.html';
            exports_1("PhasorClockCtrl", PhasorClockCtrl);
            CircularHeatChart = (function () {
                function CircularHeatChart(innerRadius, numSegments, segmentHeight, range) {
                    this.ea = function (d, i) {
                        return ((i + 1) * 2 * Math.PI) / this.numSegments;
                    };
                    this.margin = { top: 20, right: 20, bottom: 20, left: 20 };
                    this.innerRadius = innerRadius;
                    this.numSegments = numSegments;
                    this.segmentHeight = segmentHeight;
                    this.domain = null;
                    this.range = range;
                    this.accessor = function (d) { return d.value; };
                }
                CircularHeatChart.prototype.createChart = function (selection) {
                    var ctrl = this;
                    selection.each(function (data) {
                        var svg = d3_1.default.select(this);
                        var offset = ctrl.innerRadius + Math.ceil(data.length / ctrl.numSegments) * ctrl.segmentHeight;
                        var g = svg.append("g")
                            .classed("circular-heat", true)
                            .attr("transform", "translate(" + (ctrl.margin.left + offset) + "," + (ctrl.margin.top + offset) + ")");
                        var autoDomain = false;
                        if (ctrl.domain === null) {
                            ctrl.domain = d3_1.default.extent(data, ctrl.accessor);
                            autoDomain = true;
                        }
                        var color = d3_1.default.scaleLinear().domain(ctrl.domain).range(ctrl.range);
                        if (autoDomain)
                            ctrl.domain = null;
                        g.selectAll("path").data(data)
                            .enter().append("path")
                            .attr("d", d3_1.default.arc().innerRadius(ctrl.ir.bind(ctrl)).outerRadius(ctrl.or.bind(ctrl)).startAngle(ctrl.sa.bind(ctrl)).endAngle(ctrl.ea.bind(ctrl)))
                            .attr("stroke", function (d) { return "#4f5b69"; })
                            .attr("fill", function (d) { return color(ctrl.accessor(d)); });
                    });
                };
                /* Arc functions */
                CircularHeatChart.prototype.ir = function (d, i) {
                    return this.innerRadius + Math.floor(i / this.numSegments) * this.segmentHeight;
                };
                CircularHeatChart.prototype.or = function (d, i) {
                    return this.innerRadius + this.segmentHeight + Math.floor(i / this.numSegments) * this.segmentHeight;
                };
                CircularHeatChart.prototype.sa = function (d, i) {
                    return (i * 2 * Math.PI) / this.numSegments;
                };
                return CircularHeatChart;
            }());
        }
    };
});
//# sourceMappingURL=phasorClock_ctrl.js.map