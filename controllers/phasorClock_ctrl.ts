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

///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { MetricsPanelCtrl } from 'app/plugins/sdk';
import $ from "jquery"
import d3 from "d3"
import _ from "lodash"

//import { varName } from '../js/constants'   // import constants from constant file using this format

export class PhasorClockCtrl extends MetricsPanelCtrl{
    static templateUrl:string = 'partials/module.html';
    elements: Array<any>;
    heatMap: any;
    angStepSize: number;
    constructor($scope, $injector, private $rootScope) {
        super($scope, $injector);

        this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
        this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
        this.events.on('render', this.onRender.bind(this));
        this.events.on('panel-initialized', this.onPanelInitialized.bind(this));
        this.events.on('data-received', this.onDataRecieved.bind(this));
        //this.events.on('data-snapshot-load', console.log('data-snapshot-load'));
        this.events.on('data-error', this.onDataError.bind(this));
        this.events.on('refresh', this.onRefresh.bind(this));

        this.panel.phasorMag = (this.panel.phasorMag != undefined ? this.panel.phasorMag : '');
        this.panel.phasorAng = (this.panel.phasorAng != undefined ? this.panel.phasorAng : '');
        this.panel.refMag = (this.panel.refMag != undefined ? this.panel.refMag : '');
        this.panel.refAng = (this.panel.refAng != undefined ? this.panel.refAng : '');
        this.panel.numAngSegments = (this.panel.numAngSegments != undefined ? this.panel.numAngSegments : 360);
        this.panel.numMagSegments = (this.panel.numMagSegments != undefined ? this.panel.numMagSegments : 4);
        this.panel.magStep = (this.panel.magStep != undefined ? this.panel.magStep : 0.5);
        this.panel.magStart = (this.panel.magStart != undefined ? this.panel.magStart : 0);
        this.panel.range = (this.panel.range != undefined ? this.panel.range : ['white', "#01579b"]);

        this.panel.div = "canvas_" + this.panel.id;
        this.panel.height = this.row.height;

        this.$scope.domElement = '#canvas_' + this.panel.id;

        this.angStepSize = 360 / this.panel.numAngSegments;
   
        this.elements = [];

        this.updateHeatMapObject();
    }

    // #region Events from Graphana Handlers
    onInitEditMode() {
        this.addEditorTab('Options', 'public/plugins/phasorclock-plugin/partials/editor.html', 2);

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
        this.elements = data.map((a, i) => { return { id: i, Name: a.rootTarget } });

        var anglePoints = data.find((a) => { return a.target == this.panel.phasorAng.Name });
        var magPoints = data.find((a) => { return a.target == this.panel.phasorMag.Name });
        var refAngPoints = data.find((a) => { return a.target == this.panel.refAng.Name });
        var refMagPoints = data.find((a) => { return a.target == this.panel.refMag.Name });

        _.each(anglePoints.datapoints, (d, i) => {
            if (magPoints.datapoints[i][1] == d[1])
            {
                var a = refAngPoints.datapoints[i][0] - d[0];
                var angle = Math.trunc(this.fixAngle2(a) / this.angStepSize) * this.angStepSize;
                var mag = Math.trunc((magPoints.datapoints[i][0] / refMagPoints.datapoints[i][0])/this.panel.magStep) * this.panel.magStep;
                ++this.heatMap[angle.toString() + '_' + mag.toString()].value;

            }
        });

        this.loadCircularHeatMap(); 
    }

    onDataError(msg) {
        //console.log('data-error');
    }
    // #endregion

    setStartColor(newColor){
        this.panel.range[0] = newColor;
        this.refresh();
    }

    setEndColor(newColor){
        this.panel.range[1] = newColor;
        this.refresh();
    }


    loadCircularHeatMap() {
        var dataset = Object.keys(this.heatMap).map(a => this.heatMap[a]);

        var margin = { top: 0, right: 0, bottom: 0, left: 0 };
        var width = $(this.$scope.domElement).width() - margin.left - margin.right;

        var height = this.panel.height - 37;
        var innerRadius = 20;
        var numSegments = this.panel.numMagSegments;
        var segmentHeight = (height - margin.top - margin.bottom - 2 * innerRadius) / (2 * numSegments)
        
        let chart = new CircularHeatChart(innerRadius, this.panel.numAngSegments, segmentHeight, this.panel.range);

        $(this.$scope.domElement).children().remove();

        var svg = d3.select(this.$scope.domElement)
            .selectAll('svg')
            .data([dataset])
            .enter()
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append('g')
            .attr("transform",
            "translate(" + ((width) / 2 - (numSegments * segmentHeight + innerRadius)) + "," + margin.top + ")")
            .call(chart.createChart.bind(chart));

        var tooltip = d3.select(this.$scope.domElement)
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
                tooltip.select('.value').html("<b> Count: " + d.value + "</b>");

                tooltip.style('display', 'block');
                tooltip.style('opacity', 2);
            })
            .on('mousemove', function (d, i, e) {

                tooltip.style('top', (d3.mouse(this)[1] + 200) + 'px')
                    .style('left', (d3.mouse(this)[0] + 250) + 'px');
            })
            .on('mouseout', function (d) {
                tooltip.style('display', 'none');
                tooltip.style('opacity', 0);
            });
    }

    fixAngle(angle) {
        if (angle > -180 && angle <= 180) return angle;
        else if (angle <= -180) return 360 + angle;
        else if (angle > 180) return angle - 360;
    }

    fixAngle2(angle) {
        while (angle < 0)
            angle += 360;
        return angle % 360;
    }

    updateHeatMapObject() {
        this.heatMap = {}
        this.angStepSize = 360 / this.panel.numAngSegments;

        for (var j = this.panel.magStart; j < (this.panel.numMagSegments * this.panel.magStep + this.panel.magStart); j += this.panel.magStep) {
            for (var i = 0; i < 360; i += this.angStepSize) {
                var step = (Math.trunc(j / this.panel.magStep) * this.panel.magStep).toString();
                this.heatMap[i.toString() + '_' + step] = { angle: i, magnitude: step, value: 0 };
            }
        }

    }

}

class CircularHeatChart {
    margin: any;
    innerRadius: number;
    segmentHeight: number;
    numSegments: number;
    accessor: any;
    domain: any;
    range: Array<string>;
    constructor(innerRadius, numSegments, segmentHeight, range) {
        this.margin = { top: 0, right: 0, bottom: 0, left: 0 };
        this.innerRadius = innerRadius;
        this.numSegments = numSegments;
        this.segmentHeight = segmentHeight;
        this.domain = null;
        this.range = range;
        this.accessor = function (d) { return d.value; };
    }

    createChart(selection) {
        var ctrl = this;
        selection.each(function(data){
            var svg = d3.select(this);

            var offset: number = ctrl.innerRadius + Math.ceil(data.length / ctrl.numSegments) * ctrl.segmentHeight;
            var g = svg.append("g")
                .classed("circular-heat", true)
                .attr("transform", "translate(" + (ctrl.margin.left + offset) + "," + (ctrl.margin.top + offset) + ")");

            var autoDomain = false;
            if (ctrl.domain === null) {
                ctrl.domain = d3.extent(data, ctrl.accessor);
                autoDomain = true;
            }
            var color = d3.scaleLinear().domain(ctrl.domain).range(ctrl.range);
            if (autoDomain)
                ctrl.domain = null;

            g.selectAll("path").data(data)
                .enter().append("path")
                .attr("d", d3.arc().innerRadius(ctrl.ir.bind(ctrl)).outerRadius(ctrl.or.bind(ctrl)).startAngle(ctrl.sa.bind(ctrl)).endAngle(ctrl.ea.bind(ctrl)))
                .attr("stroke", function (d) { return "#4f5b69"; })
                .attr("fill", function (d) { return color(ctrl.accessor(d)); });
        });

    }

    /* Arc functions */
    ir(d, i) {
        return this.innerRadius + Math.floor(i / this.numSegments) * this.segmentHeight;
    }

    or(d, i) {
        return this.innerRadius + this.segmentHeight + Math.floor(i / this.numSegments) * this.segmentHeight;
    }
    sa(d, i) {
        return (i * 2 * Math.PI) / this.numSegments;
    }
    ea = function (d, i) {
        return ((i + 1) * 2 * Math.PI) / this.numSegments;
    }

}
