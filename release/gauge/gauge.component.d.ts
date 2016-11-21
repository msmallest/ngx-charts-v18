
import { EventEmitter, OnChanges, OnDestroy, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BaseChart } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
export declare class Gauge extends BaseChart implements OnChanges, OnDestroy, AfterViewInit {
    private element;
    dims: ViewDimensions;
    valueDomain: any;
    valueScale: any;
    color: any;
    colors: Function;
    colorScale: any;
    transform: string;
    margin: number[];
    backgroundArc: any;
    valueArc: any;
    angleSpan: number;
    innerRadius: number;
    outerRadius: number;
    resizeScale: number;
    textTransform: string;
    ticks: any;
    view: any;
    scheme: any;
    customColors: any;
    gradient: boolean;
    value: number;
    min: number;
    max: number;
    units: string;
    bigSegments: number;
    smallSegments: number;
    clickHandler: EventEmitter<{}>;
    textEl: ElementRef;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    update(): void;
    getValueDomain(): number[];
    getValueScale(): any;
    getTicks(): {
        big: any[];
        small: any[];
    };
    getTickPath(startDistance: any, tickLength: any, angle: any): any;
    displayValue(): string;
    scaleText(): void;
    click(data: any): void;
    setColors(): void;
}