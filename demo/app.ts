import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { single, multi, countries } from './data';
import chartGroups from './chartTypes';
import '../src/a2d3.scss';
import './demo.scss';

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="content">

      <label>Chart Types</label>
      <select
        [ngModel]="chartType"
        (ngModelChange)="selectChart($event)">
        <template ngFor let-group [ngForOf]="chartGroups">
          <optgroup [label]="group.name">
            <option *ngFor="let chart of group.charts" [value]="chart.selector">{{chart.name}}</option>
          </optgroup>
        </template>
      </select>

      <h3>{{chart.name}}</h3>

      <bar-vertical
        *ngIf="chartType === 'bar-vertical'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="single"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-vertical>

      <bar-horizontal
        *ngIf="chartType === 'bar-horizontal'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="single"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-horizontal>


      <bar-vertical-2d
        *ngIf="chartType === 'bar-vertical-2d'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="multi"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-vertical-2d>

      <bar-horizontal-2d
        *ngIf="chartType === 'bar-horizontal-2d'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="multi"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-horizontal-2d>

      <bar-vertical-stacked
        *ngIf="chartType === 'bar-vertical-stacked'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="multi"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-vertical-stacked>

      <bar-horizontal-stacked
        *ngIf="chartType === 'bar-horizontal-stacked'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="multi"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-horizontal-stacked>

      <bar-vertical-normalized
        *ngIf="chartType === 'bar-vertical-normalized'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="multi"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-vertical-normalized>

      <bar-horizontal-normalized
        *ngIf="chartType === 'bar-horizontal-normalized'"
        [view]="[700,200]"
        [scheme]="colorScheme"
        [results]="multi"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </bar-horizontal-normalized>

      <pie-chart
        *ngIf="chartType === 'pie-chart'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="single"
        [legend]="showLegend"
        [explodeSlices]="explodeSlices"
        [labels]="showLabels"
        [doughnut]="doughnut"
        [gradient]="gradient">
      </pie-chart>

      <advanced-pie-chart
        *ngIf="chartType === 'advanced-pie-chart'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="single"
        [gradient]="gradient">
      </advanced-pie-chart>

      <pie-grid
        *ngIf="chartType === 'pie-grid'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="single">
      </pie-grid>

      <line-chart
        *ngIf="chartType === 'line-chart'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="multi"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel"
        [autoScale]="autoScale">
      </line-chart>

      <area-chart
        *ngIf="chartType === 'area-chart'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="multi"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel"
        [autoScale]="autoScale">
      </area-chart>

      <area-chart-stacked
        *ngIf="chartType === 'area-chart-stacked'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="multi"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </area-chart-stacked>

      <area-chart-normalized
        *ngIf="chartType === 'area-chart-normalized'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="multi"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </area-chart-normalized>

      <heat-map
        *ngIf="chartType === 'heat-map'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="multi"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="xAxisLabel"
        [yAxisLabel]="yAxisLabel">
      </heat-map>

      <number-card
        *ngIf="chartType === 'number-card'"
        [view]="[700,300]"
        [scheme]="colorScheme"
        [results]="single">
      </number-card>
    </div>

    <div class="sidebar">
      <h3>Data</h3>
      <label>
        <input type="checkbox" [checked]="realTimeData" (change)="realTimeData = $event.target.checked">
        Real-time
      </label> <br />
      <pre *ngIf="chart.inputFormat === 'singleSeries'">{{single | json}}</pre>
      <pre *ngIf="chart.inputFormat === 'multiSeries'">{{multi | json}}</pre>

      <h3>Options</h3>

      <div *ngIf="chart.options.includes('showXAxis')">
        <label>
          <input type="checkbox" [checked]="showXAxis" (change)="showXAxis = $event.target.checked">
          Show X Axis
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('showYAxis')">
        <label>
          <input type="checkbox" [checked]="showYAxis" (change)="showYAxis = $event.target.checked">
          Show Y Axis
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('gradient')">
        <label>
          <input type="checkbox" [checked]="gradient" (change)="gradient = $event.target.checked">
          Use gradients
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('showLegend')">
        <label>
          <input type="checkbox" [checked]="showLegend" (change)="showLegend = $event.target.checked">
          Show Legend
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('showXAxisLabel')">
        <label>
          <input type="checkbox" [checked]="showXAxisLabel" (change)="showXAxisLabel = $event.target.checked">
          Show X Axis Label
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('xAxisLabel')">
        <label>X Axis Label:</label><br />
        <input type="text" [(ngModel)]="xAxisLabel"><br />
      </div>

      <div *ngIf="chart.options.includes('showYAxisLabel')">
        <label>
          <input type="checkbox" [checked]="showYAxisLabel" (change)="showYAxisLabel = $event.target.checked">
          Show Y Axis Label
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('yAxisLabel')">
        <label>Y Axis Label:</label><br />
        <input type="text" [(ngModel)]="yAxisLabel"><br />
      </div>

      <div *ngIf="chart.options.includes('showLabels')">
        <label>
          <input type="checkbox" [checked]="showLabels" (change)="showLabels = $event.target.checked">
          Show Labels
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('explodeSlices')">
        <label>
          <input type="checkbox" [checked]="explodeSlices" (change)="explodeSlices = $event.target.checked">
          Explode Slices
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('doughnut')">
        <label>
          <input type="checkbox" [checked]="doughnut" (change)="doughnut = $event.target.checked">
          Doughnut
        </label> <br />
      </div>

      <div *ngIf="chart.options.includes('autoScale')">
        <label>
          <input type="checkbox" [checked]="autoScale" (change)="autoScale = $event.target.checked">
          Auto Scale
        </label> <br />
      </div>
    </div>
  `
})
export class App implements OnInit {
  chartType = 'bar-vertical';
  chartGroups: any[];
  chart: any;
  realTimeData: boolean = false;
  countries: any[];
  single: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi, countries, chartGroups});
  }

  ngOnInit() {
    this.selectChart(this.chartType);

    setInterval(this.updateData.bind(this), 1000);
  }

  updateData() {
    if (!this.realTimeData) {
      return;
    }

    let country = this.countries[Math.floor(Math.random() * this.countries.length)];
    let add = Math.random() < 0.5;
    let remove = Math.random() < 0.5;

    if (remove) {
      let index = Math.floor(Math.random() * this.single.length);
      this.single.splice(index, 1)
      this.single = [ ...this.single ];
    }

    if (add) {
      let entry = {
        name: country,
        value: Math.floor(1000000 + Math.random() * 20000000)
      };
      this.single = [ ...this.single, entry ]
    }
  }

  selectChart(chartSelector) {
    this.chartType = chartSelector;
    for (let group of this.chartGroups) {
      for (let chart of group.charts) {
        if (chart.selector === chartSelector) {
          this.chart = chart;
          return;
        }
      }
    }
  }
}