/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { MetricsPanelCtrl } from 'app/plugins/sdk';
export declare class PhasorClockCtrl extends MetricsPanelCtrl {
    private $rootScope;
    static templateUrl: string;
    elements: Array<any>;
    heatMap: any;
    angStepSize: number;
    constructor($scope: any, $injector: any, $rootScope: any);
    onInitEditMode(): void;
    onPanelTeardown(): void;
    onPanelInitialized(): void;
    onRefresh(): void;
    onResize(): void;
    onRender(): void;
    onDataRecieved(data: any): void;
    onDataError(msg: any): void;
    setColor(index: any, newColor: any): void;
    loadCircularHeatMap(): void;
    fixAngle(angle: any): any;
    fixAngle2(angle: any): number;
    updateSettings(): void;
    updateHeatMapObject(): void;
}
