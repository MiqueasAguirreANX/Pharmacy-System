(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+lx/":
/*!**********************************************************!*\
  !*** ./src/app/colaboradores/colaboradores.component.ts ***!
  \**********************************************************/
/*! exports provided: ColaboradoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradoresComponent", function() { return ColaboradoresComponent; });
/* harmony import */ var _colaboradores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../colaboradores.service */ "GW67");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function ColaboradoresComponent_article_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColaboradoresComponent_article_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const col_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.eliminarColaborador(col_r2.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Colaborador ", i_r3 + 1, " -- ", col_r2.nombre, "");
} }
class ColaboradoresComponent {
    constructor(bdColaboradores) {
        this.bdColaboradores = bdColaboradores;
        this.colaboradores = [];
    }
    ngOnInit() {
        this.bdColaboradores.getColaboradores().subscribe(res => {
            this.colaboradores = res;
        });
    }
    eliminarColaborador(id) {
        this.bdColaboradores.deleteColaborador(id).subscribe(res1 => {
            console.log("Eliminado", res1);
            this.bdColaboradores.getColaboradores().subscribe(res => {
                this.colaboradores = res;
            });
        });
    }
    agregarColaborador(i_colab) {
        this.bdColaboradores.postColaborador({ nombre: i_colab.value }).subscribe(res1 => {
            this.bdColaboradores.getColaboradores().subscribe(res => {
                this.colaboradores = res;
            });
            i_colab.value = "";
        });
    }
}
ColaboradoresComponent.ɵfac = function ColaboradoresComponent_Factory(t) { return new (t || ColaboradoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_colaboradores_service__WEBPACK_IMPORTED_MODULE_0__["ColaboradoresService"])); };
ColaboradoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColaboradoresComponent, selectors: [["app-colaboradores"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_colaboradores_service__WEBPACK_IMPORTED_MODULE_0__["ColaboradoresService"]])], decls: 13, vars: 1, consts: [[1, "container", "has-shadow", "m-4"], [1, "columns", "has-shadow"], [1, "column", "has-text-centered"], [1, "container", "m-6"], [1, "field", "has-addons", "has-text-centered"], [1, "control"], ["type", "text", "placeholder", "Agregar colaborador", 1, "input", "is-info"], ["i_agregar_colaborador", ""], [1, "button", "is-info", 3, "click"], ["class", "message is-info", 4, "ngFor", "ngForOf"], [1, "message", "is-info"], [1, "message-header"], ["aria-label", "delete", 1, "delete", 3, "click"]], template: function ColaboradoresComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColaboradoresComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return ctx.agregarColaborador(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ColaboradoresComponent_article_12_Template, 5, 2, "article", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colaboradores);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xhYm9yYWRvcmVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Miqueas\Documents\Proyectos\Fullstack-Projects\Farmacia-System\frontend\Farmacia\src\main.ts */"zUnb");


/***/ }),

/***/ "4u/y":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barchart/barchart.component */ "KnB0");
/* harmony import */ var _ganancia_ganancia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ganancia/ganancia.component */ "9o0v");
/* harmony import */ var _ganancia_cliente_ganancia_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ganancia-cliente/ganancia-cliente.component */ "OsMm");





function PanelComponent_app_barchart_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-barchart");
} }
function PanelComponent_app_ganancia_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ganancia");
} }
function PanelComponent_app_ganancia_cliente_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ganancia-cliente");
} }
class PanelComponent {
    constructor() {
        this.verBarColaborador = false;
        this.verBarGanancia = false;
        this.verBarCliente = false;
    }
    ngOnInit() {
    }
    setVerBarColaborador() {
        this.verBarColaborador = true;
        this.verBarGanancia = false;
        this.verBarCliente = false;
    }
    setVerBarGanancia() {
        this.verBarColaborador = false;
        this.verBarGanancia = true;
        this.verBarCliente = false;
    }
    setVerBarCliente() {
        this.verBarColaborador = false;
        this.verBarGanancia = false;
        this.verBarCliente = true;
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], decls: 23, vars: 3, consts: [[1, "container"], [1, "columns"], [1, "column"], [1, "container", "mt-6"], [1, "panel", "is-success"], [1, "panel-heading"], [1, "panel-block", 3, "click"], [1, "panel-icon"], ["aria-hidden", "true", 1, "fas", "fa-info"], [1, "column", "is-three-fifths"], [4, "ngIf"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Estadisticas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_a_click_7_listener() { return ctx.setVerBarColaborador(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Colaboradores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_a_click_11_listener() { return ctx.setVerBarGanancia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ganancia mensual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_a_click_15_listener() { return ctx.setVerBarCliente(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Maximos compradores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PanelComponent_app_barchart_20_Template, 1, 0, "app-barchart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PanelComponent_app_ganancia_21_Template, 1, 0, "app-ganancia", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PanelComponent_app_ganancia_cliente_22_Template, 1, 0, "app-ganancia-cliente", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verBarColaborador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verBarGanancia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verBarCliente);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_2__["BarchartComponent"], _ganancia_ganancia_component__WEBPACK_IMPORTED_MODULE_3__["GananciaComponent"], _ganancia_cliente_ganancia_cliente_component__WEBPACK_IMPORTED_MODULE_4__["GananciaClienteComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "9o0v":
/*!******************************************************!*\
  !*** ./src/app/panel/ganancia/ganancia.component.ts ***!
  \******************************************************/
/*! exports provided: GananciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GananciaComponent", function() { return GananciaComponent; });
/* harmony import */ var src_app_base_datos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base-datos.service */ "h0rA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class GananciaComponent {
    constructor(bd) {
        this.bd = bd;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartLabels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.barChartData = [];
        this.setBarChart();
    }
    setBarChart() {
        let meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.bd.getItems().subscribe(res => {
            for (let item of res) {
                for (let mes of meses) {
                    if (mes == item.fecha.split("/")[1]) {
                        console.log(item.fecha.split("/")[1]);
                        if (item.costo)
                            data[mes] += parseFloat(item.costo);
                    }
                }
            }
            console.log(data);
            this.barChartData = [
                { data: data, label: 'Ganancia mensual', backgroundColor: "#196F3D", hoverBackgroundColor: "#2ECC71" }
            ];
        });
    }
    ngOnInit() {
    }
}
GananciaComponent.ɵfac = function GananciaComponent_Factory(t) { return new (t || GananciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_base_datos_service__WEBPACK_IMPORTED_MODULE_0__["BaseDatosService"])); };
GananciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GananciaComponent, selectors: [["app-ganancia"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_base_datos_service__WEBPACK_IMPORTED_MODULE_0__["BaseDatosService"]])], decls: 2, vars: 6, consts: [[1, "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function GananciaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW5hbmNpYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "A9Er":
/*!**************************************************!*\
  !*** ./src/app/servicios/servicios.component.ts ***!
  \**************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../servicios.service */ "uxTg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function ServiciosComponent_article_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServiciosComponent_article_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const serv_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.eliminarServicio(serv_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](serv_r2.servicio);
} }
class ServiciosComponent {
    constructor(bdServicio) {
        this.bdServicio = bdServicio;
        this.servicios = [];
    }
    ngOnInit() {
        this.bdServicio.getServicios().subscribe(res => {
            this.servicios = res;
        });
    }
    agregarServicio(servicio) {
        let serv = {
            servicio: servicio.value
        };
        if (serv.servicio != "")
            this.bdServicio.postServicio(serv).subscribe(res => {
                console.log(res, serv);
                this.bdServicio.getServicios().subscribe(res1 => {
                    this.servicios = res1;
                });
                servicio.value = "";
            });
    }
    eliminarServicio(id) {
        this.bdServicio.deleteServicio(id).subscribe(res => {
            console.log(res, id);
            this.bdServicio.getServicios().subscribe(res1 => {
                this.servicios = res1;
            });
        });
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_service__WEBPACK_IMPORTED_MODULE_0__["ServiciosService"])); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_servicios_service__WEBPACK_IMPORTED_MODULE_0__["ServiciosService"]])], decls: 13, vars: 1, consts: [[1, "container", "has-shadow", "m-4"], [1, "columns", "has-shadow"], [1, "column", "has-text-centered"], [1, "container", "m-6"], [1, "field", "has-addons", "has-text-centered"], [1, "control"], ["type", "text", "placeholder", "Agregar servicio", 1, "input", "is-warning"], ["i_agregar_servicio", ""], [1, "button", "is-warning", 3, "click"], ["class", "message is-warning", 4, "ngFor", "ngForOf"], [1, "message", "is-warning"], [1, "message-header"], ["aria-label", "delete", 1, "delete", 3, "click"]], template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServiciosComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return ctx.agregarServicio(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ServiciosComponent_article_12_Template, 5, 1, "article", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.servicios);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNpb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GW67":
/*!******************************************!*\
  !*** ./src/app/colaboradores.service.ts ***!
  \******************************************/
/*! exports provided: ColaboradoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradoresService", function() { return ColaboradoresService; });
/* harmony import */ var _URL_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URL.json */ "gp3a");
var _URL_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./URL.json */ "gp3a", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ColaboradoresService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = _URL_json__WEBPACK_IMPORTED_MODULE_0__.URL;
    }
    getColaboradores() {
        return this.httpClient.get(this.URL_API + `/colaboradores`);
    }
    postColaborador(nombre) {
        return this.httpClient.post(this.URL_API + "/colaboradores", nombre);
    }
    deleteColaborador(id) {
        return this.httpClient.delete(this.URL_API + `/colaboradores/del/${id}`);
    }
}
ColaboradoresService.ɵfac = function ColaboradoresService_Factory(t) { return new (t || ColaboradoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ColaboradoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ColaboradoresService, factory: ColaboradoresService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KnB0":
/*!******************************************************!*\
  !*** ./src/app/panel/barchart/barchart.component.ts ***!
  \******************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _colaboradores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../colaboradores.service */ "GW67");
/* harmony import */ var _base_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../base-datos.service */ "h0rA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");






class BarchartComponent {
    constructor(bd, bdColaboradores) {
        this.bd = bd;
        this.bdColaboradores = bdColaboradores;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartLabels = [];
        this.barChartData = [];
        this.setBarChart();
    }
    setBarChart() {
        let colabs = [];
        let data = [];
        this.bdColaboradores.getColaboradores().subscribe(res1 => {
            for (let it of res1) {
                colabs.push(it.nombre);
                data.push(0);
            }
            this.bd.getItems().subscribe(res => {
                for (let item of res) {
                    let contador = 0;
                    for (let col of colabs) {
                        if (col == item.colaborador) {
                            data[contador]++;
                        }
                        contador++;
                    }
                }
                this.barChartData = [
                    { data: data, label: 'Cantidad de procolos', backgroundColor: "#4ac", hoverBackgroundColor: "#63D4EC" }
                ];
            });
            this.barChartLabels = colabs;
        });
    }
    ngOnInit() {
    }
}
BarchartComponent.ɵfac = function BarchartComponent_Factory(t) { return new (t || BarchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_base_datos_service__WEBPACK_IMPORTED_MODULE_1__["BaseDatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_colaboradores_service__WEBPACK_IMPORTED_MODULE_0__["ColaboradoresService"])); };
BarchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BarchartComponent, selectors: [["app-barchart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_base_datos_service__WEBPACK_IMPORTED_MODULE_1__["BaseDatosService"], _colaboradores_service__WEBPACK_IMPORTED_MODULE_0__["ColaboradoresService"]])], decls: 2, vars: 6, consts: [[1, "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function BarchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXJjaGFydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "MlxL":
/*!*************************************!*\
  !*** ./src/app/clientes.service.ts ***!
  \*************************************/
/*! exports provided: ClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesService", function() { return ClientesService; });
/* harmony import */ var _URL_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URL.json */ "gp3a");
var _URL_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./URL.json */ "gp3a", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ClientesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = _URL_json__WEBPACK_IMPORTED_MODULE_0__.URL;
    }
    getDatosClienteByNombre(nombre) {
        return this.httpClient.get(this.URL_API + `/clientes/${nombre.split(" ")[0]}/${nombre.split(" ")[1]}`);
    }
    getDatosClientesByDNI(dni) {
        return this.httpClient.get(this.URL_API + `/clientes/dni/${dni}`);
    }
    getClientes() {
        return this.httpClient.get(this.URL_API + "/clientes");
    }
    postCliente(cliente) {
        return this.httpClient.post(this.URL_API + "/clientes", cliente);
    }
    patchCliente(cliente) {
        return this.httpClient.patch(this.URL_API + "/clientes", cliente);
    }
    deleteCliente(nombre) {
        return this.httpClient.delete(this.URL_API + `/clientes/${nombre.split(" ")[0]}/${nombre.split(" ")[1]}`);
    }
}
ClientesService.ɵfac = function ClientesService_Factory(t) { return new (t || ClientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ClientesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientesService, factory: ClientesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OsMm":
/*!**********************************************************************!*\
  !*** ./src/app/panel/ganancia-cliente/ganancia-cliente.component.ts ***!
  \**********************************************************************/
/*! exports provided: GananciaClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GananciaClienteComponent", function() { return GananciaClienteComponent; });
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../clientes.service */ "MlxL");
/* harmony import */ var src_app_base_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base-datos.service */ "h0rA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");






class GananciaClienteComponent {
    constructor(bd, bdClientes) {
        this.bd = bd;
        this.bdClientes = bdClientes;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartLabels = [];
        this.barChartData = [];
        this.setBarChart();
    }
    setBarChart() {
        let data = [];
        let clientes = [];
        let datos = [];
        this.bd.getItems().subscribe(res => {
            this.bdClientes.getClientes().subscribe(res1 => {
                for (let cl of res1) {
                    datos.push({ nombre: cl.nombre_completo.split(' ')[0] + " " + cl.nombre_completo.split(' ')[1], cantidad: 0 });
                }
                for (let item of res) {
                    let contador = 0;
                    for (let cliente of res1) {
                        if (cliente.nombre_completo == item.nombre_cliente + " " + item.apellido_cliente) {
                            datos[contador].cantidad++;
                        }
                        contador++;
                    }
                }
                let contador = 0;
                for (let dato of datos.sort(((a, b) => b.cantidad - a.cantidad))) {
                    if (contador > 10)
                        break;
                    data.push(dato.cantidad);
                    clientes.push(dato.nombre);
                    contador++;
                }
                this.barChartData = [
                    { data: data, label: 'Compras cliente', backgroundColor: "#212F3D", hoverBackgroundColor: "#2C7887" }
                ];
                this.barChartLabels = clientes;
            });
        });
    }
    ngOnInit() {
    }
}
GananciaClienteComponent.ɵfac = function GananciaClienteComponent_Factory(t) { return new (t || GananciaClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_base_datos_service__WEBPACK_IMPORTED_MODULE_1__["BaseDatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_clientes_service__WEBPACK_IMPORTED_MODULE_0__["ClientesService"])); };
GananciaClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GananciaClienteComponent, selectors: [["app-ganancia-cliente"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_base_datos_service__WEBPACK_IMPORTED_MODULE_1__["BaseDatosService"], _clientes_service__WEBPACK_IMPORTED_MODULE_0__["ClientesService"]])], decls: 2, vars: 6, consts: [[1, "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function GananciaClienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW5hbmNpYS1jbGllbnRlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RNaf":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../servicios.service */ "uxTg");
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../clientes.service */ "MlxL");
/* harmony import */ var _colaboradores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../colaboradores.service */ "GW67");
/* harmony import */ var _base_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../base-datos.service */ "h0rA");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");











function ItemsComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_11_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _i_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.setActualVerProtocolo(_i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _i_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _i_r8 + 1, " ");
} }
function ItemsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ItemsComponent_div_11_li_3_Template, 3, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.listaNumeros());
} }
const _c0 = function (a0, a1) { return { "has-background-success": a0, "has-background-danger has-text-white": a1 }; };
const _c1 = function (a0, a1, a2, a3, a4) { return { "has-background-success": a0, "has-background-danger has-text-white": a1, "has-background-warning": a2, "has-background-orange has-text-white": a3, "has-background-info has-text-white": a4 }; };
function ItemsComponent_table_12_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_table_12_tr_66_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const item_r12 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r14.setActualItem(item_r12.nro_protocolo); return ctx_r14.setModal1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_table_12_tr_66_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const item_r12 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r16.setActualItem(item_r12.nro_protocolo); return ctx_r16.setModal2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_table_12_tr_66_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const item_r12 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r17.setActualItem(item_r12.nro_protocolo); return ctx_r17.descargarProtocolo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_table_12_tr_66_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const item_r12 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.deleteProtocolo(item_r12.nro_protocolo, null, null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.nro_protocolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.servicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r12.costo_proveedor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r12.deposito, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r12.costo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r12.senia, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r12.falta_abonar, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](18, _c0, item_r12.pagado == "Si", item_r12.pagado == "No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.pagado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.colaborador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](21, _c0, item_r12.delivery == "Si", item_r12.delivery == "No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.delivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](24, _c1, item_r12.estado == "Abierto", item_r12.estado == "Cerrado", item_r12.estado == "Suspendido", item_r12.estado == "En proceso", item_r12.estado == "Presupuesto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.fecha_vencimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](30, _c0, item_r12.entregado_prov == "Si", item_r12.entregado_prov == "No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.entregado_prov);
} }
function ItemsComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "N\u00B0Prot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Fecha.Creado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Costo Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Falta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Colaborador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Fecha. Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Entregado Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "N\u00B0Prot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Fecha.Creado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Costo Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Falta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Colaborador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Fecha. Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Entregado Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, ItemsComponent_table_12_tr_66_Template, 39, 33, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.actualVerProtocolos);
} }
function ItemsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.isActive = !ctx_r19.isActive; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "header", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_13_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.whatsappCliente(ctx_r21.actualItem.tel_celular); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Domicilio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "CP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.actualItem.nombre_cliente, " ", ctx_r2.actualItem.apellido_cliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.tel_fijo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.tel_celular);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.domicilio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.cp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.actualItem.observaciones);
} }
function ItemsComponent_div_14_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r48 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r32.actualItem.servicio == serv_r48.servicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](serv_r48.servicio);
} }
function ItemsComponent_div_14_option_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r49 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r38.actualItem.colaborador == col_r49.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](col_r49.nombre);
} }
function ItemsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r50.isActiveEditar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "header", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r52.isActiveEditar = !ctx_r52.isActiveEditar; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Telefono fijo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Telefono celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Domicilio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Entre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "CP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "select", null, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, ItemsComponent_div_14_option_72_Template, 2, 2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Costo proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_14_Template_div_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](91); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](97); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r53.calcularFaltante(_r35, _r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Colaborador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "select", null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, ItemsComponent_div_14_option_108_Template, 2, 2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "select", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Abierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Cerrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "En proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Suspendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Entregado a proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, " Si ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](138, "input", 82, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "input", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, " Si ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](152, "input", 85, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](162, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, " Si ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "input", 88, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "Fecha Vto Garantia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](174, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](180, "textarea", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "footer", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_14_Template_button_click_183_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](52); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](58); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](64); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](71); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](79); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](85); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](91); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](97); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](107); const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](115); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](175); const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](135); const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](149); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](163); const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](181); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r54.cambiarProtocolo(_r22, _r23, _r24, _r25, _r26, _r27, _r28, _r29, _r30, _r31, _r33, _r34, _r35, _r36, _r37, _r39, _r46, _r40, _r42, _r44, _r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_14_Template_button_click_185_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r55.isActiveEditar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Protocolo ", ctx_r3.actualItem.nro_protocolo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.nombre_cliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.apellido_cliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.tel_fijo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.tel_celular);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.domicilio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.entre_calles);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.cp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.servicios);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.costo_proveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.deposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.costo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.senia);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.colaboradores);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r3.actualItem.estado == "Abierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r3.actualItem.estado == "Cerrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r3.actualItem.estado == "En proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r3.actualItem.estado == "Suspendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r3.actualItem.estado == "Presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.actualItem.entregado_prov == "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.actualItem.entregado_prov == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.actualItem.pagado == "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.actualItem.pagado == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.actualItem.delivery == "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.actualItem.delivery == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate3"]("value", "", ctx_r3.actualItem.fecha_vencimiento.split("/")[2], "-", ctx_r3.actualItem.fecha_vencimiento.split("/")[1], "-", ctx_r3.actualItem.fecha_vencimiento.split("/")[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r3.actualItem.observaciones);
} }
function ItemsComponent_div_15_option_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](col_r84.nombre);
} }
function ItemsComponent_div_15_option_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](serv_r85.servicio);
} }
function ItemsComponent_div_15_a_127_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_15_a_127_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r88); const ant_r86 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r87.infoProtocolo(ant_r86); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ant_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ant_r86.fecha);
} }
function ItemsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 102, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_15_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54); const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r89.buscarAnteriores(_r58, _r56, _r57, _r59, _r60, _r61, _r62, _r63, _r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Telefono fijo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Telefono celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 110, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 112, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Domicilio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Entre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "CP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Costo proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "input", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_15_Template_div_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](79); const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](85); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r91.calcularFaltante(_r67, _r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Colaborador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "select", null, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, ItemsComponent_div_15_option_97_Template, 2, 1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "select", null, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Abierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Cerrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "En proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Suspendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "select", null, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, ItemsComponent_div_15_option_122_Template, 2, 1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "nav", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, " Anteriores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, ItemsComponent_div_15_a_127_Template, 5, 1, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Entregado a proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "input", 135, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, " Si ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "input", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "input", 139, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_15_Template_input_click_150_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](151); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r92.estaPagado = true; return _r77.checked = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, " Si ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "input", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_15_Template_input_click_154_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](155); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r93.estaPagado = false; return _r78.checked = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](164, "input", 143, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, " Si ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](168, "input", 145, 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "Fecha Vto Garantia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](176, "input", 147, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](182, "textarea", 149, 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "input", 153, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, " Mostrar observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_15_Template_button_click_191_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54); const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60); const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](121); const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](67); const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](73); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](79); const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](85); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](96); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](104); const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](177); const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](137); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](151); const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](165); const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](183); const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](188); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r94.agregarProtocolo(_r58, _r56, _r57, _r59, _r60, _r61, _r62, _r63, _r64, _r72, _r65, _r66, _r67, _r68, _r69, _r71, _r81, _r75, _r77, _r79, _r82, _r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](192, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.estaPagado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.estaPagado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.colaboradores);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.servicios);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.anteriores);
} }
function ItemsComponent_div_16_tbody_137_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_tbody_137_tr_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103); const item_r101 = ctx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r102.setActualItem(item_r101.nro_protocolo); return ctx_r102.setModal1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_tbody_137_tr_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103); const item_r101 = ctx.$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r104.setActualItem(item_r101.nro_protocolo); return ctx_r104.setModal2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_tbody_137_tr_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103); const item_r101 = ctx.$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r105.setActualItem(item_r101.nro_protocolo); return ctx_r105.descargarProtocolo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_tbody_137_tr_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103); const item_r101 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9); const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r106.deleteProtocolo(item_r101.nro_protocolo, _r95, _r96); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.nro_protocolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.servicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r101.costo_proveedor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r101.deposito, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r101.costo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r101.senia, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", item_r101.falta_abonar, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](18, _c0, item_r101.pagado == "Si", item_r101.pagado == "No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.pagado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](21, _c0, item_r101.delivery == "Si", item_r101.delivery == "No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.delivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.colaborador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](24, _c1, item_r101.estado == "Abierto", item_r101.estado == "Cerrado", item_r101.estado == "Suspendido", item_r101.estado == "En proceso", item_r101.estado == "Presupuesto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.fecha_vencimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](30, _c0, item_r101.entregado_prov == "Si", item_r101.entregado_prov == "No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r101.entregado_prov);
} }
function ItemsComponent_div_16_tbody_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemsComponent_div_16_tbody_137_tr_1_Template, 39, 33, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r99.resultados_busqueda);
} }
function ItemsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Buscar por");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "select", 160, 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Numero protocolo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Criterio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 163, 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ItemsComponent_div_16_Template_input_keyup_enter_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r108); const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9); const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r107.buscarPor(_r95, _r96); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r108); const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9); const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r109.buscarPor(_r95, _r96); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Cambiar estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "select", 165, 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Abierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Cerrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "En proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Suspendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r108); const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r110.cambiarEstadoBuscado(_r97); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Cambiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Cambiar pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "select", 165, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_div_16_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r108); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](64); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r111.cambiarPagadoBuscado(_r98); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Cambiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "table", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Prot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Fecha.Creado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Costo Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Falta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Colaborador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Fecha. Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Entregado Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Prot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Fecha.Creado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Costo Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Falta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Colaborador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Fecha. Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Entregado Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, ItemsComponent_div_16_tbody_137_Template, 2, 1, "tbody", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.puedeCambiar);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.puedeCambiar);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.puedeCambiar);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.puedeCambiar);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.resultados_busqueda[0]);
} }
function ItemsComponent_nav_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "N\u00B0Prot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Costo Prov");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Se\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Falta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Colab");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Deliv");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Fcha. Vto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Entregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ItemsComponent {
    constructor(bd, bdColaboradores, bdClientes, bdServicios) {
        this.bd = bd;
        this.bdColaboradores = bdColaboradores;
        this.bdClientes = bdClientes;
        this.bdServicios = bdServicios;
        this.verAgregar = false;
        this.verBuscar = false;
        this.anteriores = [];
        this.resultados_busqueda = [];
        this.servicios = [];
        this.puedeCambiar = true;
        this.colaboradores = [];
        this.actualVerProtocolos = [];
        this.estaPagado = false;
        this.isActive = false;
        this.isActiveEditar = false;
        this.verProtocolos = false;
        this.actualItem = {};
    }
    ngOnInit() {
        this.bdColaboradores.getColaboradores().subscribe(res => {
            this.colaboradores = res;
        });
        this.bdServicios.getServicios().subscribe(res => {
            this.servicios = res;
        });
    }
    setActualItem(cod) {
        for (let _item of this.bd.items) {
            if (_item.nro_protocolo == cod) {
                this.actualItem = {
                    nro_protocolo: _item.nro_protocolo,
                    fecha: _item.fecha,
                    nombre_cliente: _item.nombre_cliente ? _item.nombre_cliente : "",
                    apellido_cliente: _item.apellido_cliente ? _item.apellido_cliente : "",
                    tel_fijo: _item.tel_fijo ? _item.tel_fijo : "",
                    tel_celular: _item.tel_celular ? _item.tel_celular : "",
                    dni: _item.dni ? _item.dni : "",
                    email: _item.email ? _item.email : "",
                    domicilio: _item.domicilio ? _item.domicilio : "",
                    entre_calles: _item.entre_calles ? _item.entre_calles : "",
                    cp: _item.cp ? _item.cp : "",
                    observaciones: _item.observaciones ? _item.observaciones : "",
                    costo_proveedor: _item.costo_proveedor ? _item.costo_proveedor : "",
                    deposito: _item.deposito ? _item.deposito : "",
                    costo: _item.costo ? _item.costo : "",
                    senia: _item.senia ? _item.senia : "",
                    servicio: _item.servicio,
                    colaborador: _item.colaborador,
                    estado: _item.estado,
                    entregado_prov: _item.entregado_prov,
                    delivery: _item.delivery,
                    fecha_vencimiento: _item.fecha_vencimiento ? _item.fecha_vencimiento : ""
                };
            }
        }
    }
    setModal1() {
        console.log("Abriendo modal 1");
        this.isActive = true;
    }
    setModal2() {
        console.log("Abriendo modal 2");
        this.isActiveEditar = true;
    }
    cambiarProtocolo(i_dni, i_nombre, i_apellido, i_tel_fijo, i_tel_cel, i_email, i_domicilio, i_entre, i_cp, select_servicios, i_costo_proveedor, i_deposito, i_costo, i_senia, select_colaborador, select_estado, i_fecha_vencimiento, r_entregado_si, r_pagado_si, r_delivery_si, i_observaciones) {
        console.log("CAMBIANDO EL PROTOCOLO");
        //nro_protocolo: this.actualItem.nro_protocolo,
        // Dos tareas
        let protocolo = {
            nro_protocolo: this.actualItem.nro_protocolo,
            nombre_cliente: (i_nombre.value).toLowerCase(),
            apellido_cliente: (i_apellido.value).toLowerCase(),
            dni: i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
            tel_fijo: i_tel_fijo.value,
            tel_celular: i_tel_cel.value.slice(0, 4) != "+549" ? "+549" + i_tel_cel.value : i_tel_cel.value,
            email: i_email.value,
            domicilio: i_domicilio.value,
            entre_calles: i_entre.value,
            cp: i_cp.value,
            servicio: select_servicios.selectedOptions[0].childNodes[0].data,
            observaciones: i_observaciones.value,
            costo_proveedor: parseFloat(i_costo_proveedor.value),
            deposito: parseFloat(i_deposito.value),
            costo: parseFloat(i_costo.value),
            senia: parseFloat(i_senia.value),
            falta_abonar: parseFloat(i_costo.value) - parseFloat(i_senia.value),
            pagado: r_pagado_si.checked ? "Si" : "No",
            delivery: r_delivery_si.checked ? "Si" : "No",
            colaborador: select_colaborador.selectedOptions[0].childNodes[0].data,
            estado: select_estado.selectedOptions[0].childNodes[0].data,
            fecha_vencimiento: i_fecha_vencimiento.value ? `${i_fecha_vencimiento.value.split("-")[2]}/${i_fecha_vencimiento.value.split("-")[1]}/${i_fecha_vencimiento.value.split("-")[0]}` : "",
            entregado_prov: r_entregado_si.checked ? "Si" : "No"
        };
        let cliente = {
            nro_dni: i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
            nombre_completo: `${i_nombre.value.toLowerCase()} ${i_apellido.value.toLowerCase()}`,
            tel_fijo: i_tel_fijo.value,
            tel_celular: i_tel_cel.value.slice(0, 4) != "+549" ? "+549" + i_tel_cel.value : i_tel_cel.value,
            email: i_email.value,
            domicilio: i_domicilio.value,
            entre_calles: i_entre.value,
            cp: i_cp.value,
        };
        this.bd.patchProtocolo(protocolo).subscribe((res) => {
            this.bd.getItems().subscribe(res1 => {
                this.bd.items = res1;
            });
        });
        this.bdClientes.patchCliente(cliente).subscribe(res => {
            console.log(res);
        });
        this.isActiveEditar = false;
    }
    setVerProtocolos() {
        if (this.verProtocolos) {
            this.verProtocolos = false;
        }
        else {
            this.bd.getItems().subscribe(res => {
                this.bd.items = res;
            });
            this.verAgregar = false;
            this.verBuscar = false;
            this.verProtocolos = true;
        }
    }
    setAgregarProtocolo() {
        if (this.verAgregar) {
            this.verAgregar = false;
        }
        else {
            this.bd.getItems().subscribe(res => {
                this.bd.items = res;
            });
            this.verAgregar = true;
            this.verBuscar = false;
            this.verProtocolos = false;
        }
    }
    setBuscarProtocolos() {
        if (this.verBuscar) {
            this.verBuscar = false;
        }
        else {
            this.bd.getItems().subscribe(res => {
                this.bd.items = res;
            });
            this.verAgregar = false;
            this.verBuscar = true;
            this.verProtocolos = false;
        }
    }
    buscarPor(_select, _criterio) {
        console.log("BUSCANDO");
        // _select.selectedOptions[0].childNodes[0].data return la opcion seleccionada
        if (_criterio.value != "") {
            if (_select.selectedOptions[0].childNodes[0].data == "Numero protocolo") {
                this.bd.getItemsByNroProt(parseInt(_criterio.value)).subscribe(res => {
                    this.resultados_busqueda = res;
                    this.buscarActualItem = res[0];
                });
                this.puedeCambiar = false;
            }
            else if (_select.selectedOptions[0].childNodes[0].data == "Fecha") {
                this.bd.getItemsByDate(_criterio.value).subscribe(res => {
                    this.resultados_busqueda = res;
                });
                this.puedeCambiar = true;
            }
            else if (_select.selectedOptions[0].childNodes[0].data == "Nombre") {
                let nombre = _criterio.value;
                this.bd.getItemsByNombre(nombre.toLowerCase()).subscribe(res => {
                    this.resultados_busqueda = res;
                });
                this.puedeCambiar = true;
            }
            else if (_select.selectedOptions[0].childNodes[0].data == "Apellido") {
                let apellido = _criterio.value;
                this.bd.getItemsByApellido(apellido.toLowerCase()).subscribe(res => {
                    this.resultados_busqueda = res;
                });
                this.puedeCambiar = true;
            }
            else if (_select.selectedOptions[0].childNodes[0].data == "Estado") {
                this.bd.getItemsByState(_criterio.value).subscribe(res => {
                    this.resultados_busqueda = res;
                });
                this.puedeCambiar = true;
            }
            else if (_select.selectedOptions[0].childNodes[0].data == "DNI") {
                this.bd.getItemsByDNI(parseInt(_criterio.value)).subscribe(res => {
                    this.resultados_busqueda = res;
                });
                this.puedeCambiar = true;
            }
            else if (_select.selectedOptions[0].childNodes[0].data == "Observaciones") {
                this.bd.getItemsByDescripcion(_criterio.value).subscribe(res => {
                    this.resultados_busqueda = res;
                });
                this.puedeCambiar = true;
            }
        }
    }
    buscarAnteriores(i_dni, i_nombre, i_apellido, i_tel_fijo, i_tel_cel, i_email, i_domicilio, i_entre_calles, i_cp) {
        this.bdClientes.getDatosClienteByNombre(`${i_nombre.value} ${i_apellido.value}`).subscribe(res => {
            console.log("RES:", res);
            if (res) {
                i_nombre.value = i_nombre.value;
                i_apellido.value = i_apellido.value;
                i_dni.value = res.nro_dni,
                    i_tel_fijo.value = res.tel_fijo;
                i_tel_cel.value = res.tel_celular;
                i_email.value = res.email;
                i_domicilio.value = res.domicilio;
                i_entre_calles.value = res.entre_calles;
                i_cp.value = res.cp;
            }
            else {
                alert('Datos no encontrados');
                i_nombre.value = "";
                i_apellido.value = "";
                i_dni.value = "";
                i_tel_fijo.value = "";
                i_tel_cel.value = "";
                i_email.value = "";
                i_domicilio.value = "";
                i_cp.value = "";
            }
        });
        this.bd.getItemsByNombre(i_nombre.value).subscribe(res => {
            if (res.length > 6) {
                this.anteriores = res.slice(-6);
            }
            else {
                this.anteriores = res;
            }
        });
    }
    agregarProtocolo(i_dni, i_nombre, i_apellido, i_tel_fijo, i_tel_cel, i_email, i_domicilio, i_entre, i_cp, select_servicios, i_costo_proveedor, i_deposito, i_costo, i_senia, select_colaborador, select_estado, i_fecha_vencimiento, r_entregado_si, r_pagado_si, r_delivery_si, i_observaciones, checkObservaciones) {
        // Dos tareas
        let fecha = new Date();
        let protocolo = {
            fecha: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
            nombre_cliente: i_nombre.value.toLowerCase(),
            apellido_cliente: i_apellido.value.toLowerCase(),
            dni: i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
            tel_fijo: i_tel_fijo.value,
            tel_celular: i_tel_cel.value.slice(0, 4) != "+549" ? "+549" + i_tel_cel.value : i_tel_cel.value,
            email: i_email.value,
            domicilio: i_domicilio.value,
            entre_calles: i_entre.value,
            cp: i_cp.value,
            servicio: select_servicios.selectedOptions[0].childNodes[0].data,
            observaciones: i_observaciones.value,
            costo_proveedor: parseFloat(i_costo_proveedor.value),
            deposito: parseFloat(i_deposito.value),
            costo: parseFloat(i_costo.value),
            senia: parseFloat(i_senia.value),
            falta_abonar: parseFloat(i_costo.value) - parseFloat(i_senia.value),
            pagado: r_pagado_si.checked ? "Si" : "No",
            delivery: r_delivery_si.checked ? "Si" : "No",
            colaborador: select_colaborador.selectedOptions[0].childNodes[0].data,
            estado: select_estado.selectedOptions[0].childNodes[0].data,
            fecha_vencimiento: i_fecha_vencimiento.value ? `${i_fecha_vencimiento.value.split("-")[2]}/${i_fecha_vencimiento.value.split("-")[1]}/${i_fecha_vencimiento.value.split("-")[0]}` : "",
            entregado_prov: r_entregado_si.checked ? "Si" : "No"
        };
        let cliente = {
            nro_dni: i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
            nombre_completo: `${i_nombre.value.toLowerCase()} ${i_apellido.value.toLowerCase()}`,
            tel_fijo: i_tel_fijo.value,
            tel_celular: i_tel_cel.value.slice(0, 4) != "+549" ? "+549" + i_tel_cel.value : i_tel_cel.value,
            email: i_email.value,
            domicilio: i_domicilio.value,
            entre_calles: i_entre.value,
            cp: i_cp.value,
        };
        //Agregar el item a la bd protocolos despues de validarlos
        this.bd.postProtocolo(protocolo).subscribe(res => {
            if (checkObservaciones.checked) {
                const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
                /*
                FARMACIA YUVONE
                Protocolo Nº xxxx
                Fecha
                Servicio
                Nombre
                Observaciones:
                */
                doc.setFontSize(40);
                doc.setTextColor(25, 111, 61);
                doc.text('FARMACIA YUVONE', 30, 20);
                doc.setFontSize(28);
                doc.setTextColor(29, 33, 34);
                doc.text(`Protocolo N°: ${res.protocolo_id}`, 30, 35);
                doc.text(`Fecha: ${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`, 30, 50);
                doc.text(`Servicio: ${select_servicios.selectedOptions[0].childNodes[0].data}`, 30, 65);
                doc.text(`Nombre: ${i_nombre.value} ${i_apellido.value}`, 30, 80);
                let frases = "";
                let contador = 0;
                for (let palabra of i_observaciones.value.split(" ")) {
                    if (contador > 3) {
                        contador = 0;
                        frases += "\n";
                    }
                    frases += ` ${palabra}`;
                    contador++;
                }
                doc.text(`Observaciones:`, 30, 95);
                doc.setFontSize(21);
                doc.text(`${frases}`, 30, 110);
                doc.save(`factura_unica_${res.protocolo_id}.pdf`);
            }
            else {
                const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
                /*
                FARMACIA YUVONE
                Protocolo Nº xxxx
                Fecha
                Servicio
                Nombre
                Observaciones:
                */
                doc.setFontSize(40);
                doc.setTextColor(25, 111, 61);
                doc.text('FARMACIA YUVONE', 30, 20);
                doc.setFontSize(28);
                doc.setTextColor(29, 33, 34);
                doc.text(`Protocolo N°: ${res.protocolo_id}`, 30, 35);
                doc.text(`Fecha: ${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`, 30, 50);
                doc.text(`Servicio: ${select_servicios.selectedOptions[0].childNodes[0].data}`, 30, 65);
                doc.text(`Nombre: ${i_nombre.value} ${i_apellido.value}`, 30, 80);
                let frases = "";
                let contador = 0;
                for (let palabra of i_observaciones.value.split(" ")) {
                    if (contador > 3) {
                        contador = 0;
                        frases += "\n";
                    }
                    frases += ` ${palabra}`;
                    contador++;
                }
                doc.text(`Observaciones:`, 30, 95);
                doc.setFontSize(21);
                doc.text(`${frases}`, 30, 110);
                doc.save(`factura_farmacia_${res.protocolo_id}.pdf`);
                const doc1 = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
                /*
                FARMACIA YUVONE
                Protocolo Nº xxxx
                Fecha
                Servicio
                Nombre
                Observaciones:
                */
                doc1.setFontSize(40);
                doc1.setTextColor(25, 111, 61);
                doc1.text('FARMACIA YUVONE', 30, 20);
                doc1.setFontSize(28);
                doc1.setTextColor(29, 33, 34);
                doc1.text(`Protocolo N°: ${res.protocolo_id}`, 30, 35);
                doc1.text(`Fecha: ${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`, 30, 50);
                doc1.text(`Servicio: ${select_servicios.selectedOptions[0].childNodes[0].data}`, 30, 65);
                doc1.text(`Nombre: ${i_nombre.value} ${i_apellido.value}`, 30, 80);
                doc1.save(`factura_cliente_${res.protocolo_id}.pdf`);
            }
            // Agregar los datos a la bd clientes para futuras busquedas
            this.bdClientes.postCliente(cliente).subscribe(res => {
                console.log(res);
            });
            // Reset all TODO
            let inputs = [
                i_dni, i_nombre, i_apellido, i_tel_fijo, i_tel_cel,
                i_email, i_domicilio, i_entre, i_cp, i_observaciones,
                i_costo_proveedor, i_deposito, i_costo, i_senia
            ];
            inputs.forEach(item => {
                item.value = "";
            });
            // Change the items again
            this.bd.getItems().subscribe(res => {
                this.bd.items = res;
            });
        });
    }
    infoProtocolo(ant) {
        this.setActualItem(ant.nro_protocolo);
        this.isActive = !this.isActive;
    }
    cambiarEstadoBuscado(selectCambiarEstado) {
        let estado = {
            estado: selectCambiarEstado.selectedOptions[0].childNodes[0].data,
            nro_protocolo: this.buscarActualItem.nro_protocolo
        };
        this.bd.patchEstadoProtocolo(estado).subscribe(res => {
            console.log(res);
        });
        this.bd.getItemsByNroProt(parseInt(this.buscarActualItem.nro_protocolo)).subscribe(res => {
            this.resultados_busqueda = res;
            this.buscarActualItem = res[0];
        });
    }
    cambiarPagadoBuscado(selectCambiarPagado) {
        let pagado = {
            pagado: selectCambiarPagado.selectedOptions[0].childNodes[0].data,
            nro_protocolo: this.buscarActualItem.nro_protocolo
        };
        this.bd.patchPagadoProtocolo(pagado).subscribe(res => {
            console.log(res);
        });
        this.bd.getItemsByNroProt(parseInt(this.buscarActualItem.nro_protocolo)).subscribe(res => {
            this.resultados_busqueda = res;
            this.buscarActualItem = res[0];
        });
    }
    whatsappCliente(numero) {
        window.open(`https://api.whatsapp.com/send?phone=${numero}`);
    }
    descargarProtocolo() {
        console.log("Imprimiendo protocolo: ", this.actualItem);
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
        doc.setFontSize(40);
        doc.setTextColor(25, 111, 61);
        doc.text('FARMACIA YUVONE', 30, 20);
        doc.setFontSize(28);
        doc.setTextColor(29, 33, 34);
        doc.text(`Protocolo N°: ${this.actualItem.nro_protocolo}`, 30, 35);
        doc.text(`Fecha: ${this.actualItem.fecha}`, 30, 50);
        doc.text(`Servicio: ${this.actualItem.servicio}`, 30, 65);
        doc.text(`Nombre: ${this.actualItem.nombre_cliente} ${this.actualItem.apellido_cliente}`, 30, 80);
        let frases = "";
        let contador = 0;
        for (let palabra of this.actualItem.observaciones.split(" ")) {
            if (contador > 3) {
                contador = 0;
                frases += "\n";
            }
            frases += ` ${palabra}`;
            contador++;
        }
        doc.text(`Observaciones:`, 30, 95);
        doc.setFontSize(21);
        doc.text(`${frases}`, 30, 110);
        doc.save(`factura_unica_${this.actualItem.nro_protocolo}.pdf`);
    }
    deleteProtocolo(id, _select, _criterio) {
        let resp = confirm("¿Esta seguro que desea eliminar el protocolo?");
        if (resp) {
            this.bd.deleteProtocolo(id).subscribe(res => {
                console.log(res);
                this.bd.getItems().subscribe(res1 => {
                    this.bd.items = res1;
                });
                if (_select && _criterio) {
                    if (_select.selectedOptions[0].childNodes[0].data == "Numero protocolo") {
                        this.bd.getItemsByNroProt(parseInt(_criterio.value)).subscribe(res => {
                            this.resultados_busqueda = res;
                            this.buscarActualItem = res[0];
                        });
                        this.puedeCambiar = false;
                    }
                    else if (_select.selectedOptions[0].childNodes[0].data == "Fecha") {
                        this.bd.getItemsByDate(_criterio.value).subscribe(res => {
                            this.resultados_busqueda = res;
                        });
                        this.puedeCambiar = true;
                    }
                    else if (_select.selectedOptions[0].childNodes[0].data == "Nombre") {
                        let nombre = _criterio.value;
                        this.bd.getItemsByNombre(nombre.toLowerCase()).subscribe(res => {
                            this.resultados_busqueda = res;
                        });
                        this.puedeCambiar = true;
                    }
                    else if (_select.selectedOptions[0].childNodes[0].data == "Apellido") {
                        let apellido = _criterio.value;
                        this.bd.getItemsByApellido(apellido.toLowerCase()).subscribe(res => {
                            this.resultados_busqueda = res;
                        });
                        this.puedeCambiar = true;
                    }
                    else if (_select.selectedOptions[0].childNodes[0].data == "Estado") {
                        this.bd.getItemsByState(_criterio.value).subscribe(res => {
                            this.resultados_busqueda = res;
                        });
                        this.puedeCambiar = true;
                    }
                    else if (_select.selectedOptions[0].childNodes[0].data == "DNI") {
                        this.bd.getItemsByDNI(parseInt(_criterio.value)).subscribe(res => {
                            this.resultados_busqueda = res;
                        });
                        this.puedeCambiar = true;
                    }
                }
            });
        }
    }
    calcularFaltante(costo, senia) {
        if (costo.value && senia.value) {
            alert(`EL FALTANTE ES ${parseFloat(costo.value) - parseFloat(senia.value)}`);
        }
        else {
            alert("ERROR! DATOS FALTANTES");
        }
    }
    listaNumeros() {
        let lista = [];
        console.log("l: " + this.bd.items.length + " , res:" + Math.floor(this.bd.items.length / 75));
        for (let i = 0; i < Math.floor(this.bd.items.length / 75) + 1; i++) {
            lista.push(i);
        }
        return lista;
    }
    setActualVerProtocolo(n) {
        this.actualVerProtocolos = [];
        this.bd.getItems().subscribe(res => {
            for (let i = n * 75; i < ((n + 1) * 75); i++) {
                if (i < res.length) {
                    this.actualVerProtocolos.push(res[i]);
                }
            }
        });
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_base_datos_service__WEBPACK_IMPORTED_MODULE_3__["BaseDatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_colaboradores_service__WEBPACK_IMPORTED_MODULE_2__["ColaboradoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_servicios_service__WEBPACK_IMPORTED_MODULE_0__["ServiciosService"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_base_datos_service__WEBPACK_IMPORTED_MODULE_3__["BaseDatosService"], _colaboradores_service__WEBPACK_IMPORTED_MODULE_2__["ColaboradoresService"], _clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"], _servicios_service__WEBPACK_IMPORTED_MODULE_0__["ServiciosService"]])], decls: 18, vars: 7, consts: [[1, "container", 2, "display", "flex", "align-items", "center", "flex-direction", "column", "justify-content", "center"], [1, "columns", "mt-2"], [1, "column"], [1, "button", "is-primary", "is-outlined", 3, "click"], [1, "button", "is-info", "is-outlined", 3, "click"], [1, "button", "is-warning", "is-outlined", 3, "click"], ["class", "card m-4 p-4", "style", "background-color: #EAEDED;", 4, "ngIf"], ["class", "table is-bordered my-4", "style", "padding-bottom: 50px!important; margin-bottom: 50px!important;", 4, "ngIf"], ["class", "modal is-active", 4, "ngIf"], ["class", "container my-4", 4, "ngIf"], ["class", "navbar is-fixed-bottom", 4, "ngIf"], [1, "card", "m-4", "p-4", 2, "background-color", "#EAEDED"], [1, "is-centered"], [1, "pagination-list", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [4, "ngFor", "ngForOf"], [1, "button", "has-background-success", "has-text-white-bis", "m-2", 2, "border-radius", "50%", 3, "click"], [1, "table", "is-bordered", "my-4", 2, "padding-bottom", "50px!important", "margin-bottom", "50px!important"], [1, "has-text-centered"], [1, "block", 2, "display", "flex", "flex-direction", "row", "align-items", "center", "border", "none", "vertical-align", "middle"], [1, "button", "is-primary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-address-card"], [1, "button", "is-link", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-edit"], [1, "button", "is-warning", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-file-download"], [1, "button", "is-danger", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-trash-alt"], [1, "has-text-centered", 3, "ngClass"], [1, "modal", "is-active"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-head", "has-background-success-dark"], [1, "modal-card-title", "has-text-white"], [1, "icon", "has-text-white", "p-2", "whatsapp-icon", 3, "click"], [1, "fab", "fa-2x", "fa-whatsapp"], [1, "modal-card-body"], [1, "columns"], [1, "column", "has-text-centered"], [1, "my-2"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "field"], [1, "label"], [1, "control"], ["placeholder", "Identificacion", 1, "input", 3, "value"], ["i_dni_editar", ""], ["type", "text", "placeholder", "Nombre", 1, "input", 3, "value"], ["i_nombre_editar", ""], ["type", "text", "placeholder", "Apellido", 1, "input", 3, "value"], ["i_apellido_editar", ""], ["type", "tel", "placeholder", "Telefono fijo", 1, "input", 3, "value"], ["i_tel_fijo_editar", ""], ["type", "tel", "placeholder", "Telefono celular", 1, "input", 3, "value"], ["i_tel_cel_editar", ""], ["type", "email", "placeholder", "Email", 1, "input", 3, "value"], ["i_email_editar", ""], ["type", "text", "placeholder", "Domicilio", 1, "input", 3, "value"], ["i_domicilio_editar", ""], ["type", "text", "placeholder", "Entre que calles", 1, "input", 3, "value"], ["i_entre_editar", ""], ["type", "text", "placeholder", "Codigo postal", 1, "input", 3, "value"], ["i_cp_editar", ""], [1, "select"], ["select_servicios_editar", ""], [3, "selected", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "Costo proveedor", 1, "input", 3, "value"], ["i_costo_proveedor_editar", ""], ["type", "number", "placeholder", "Deposito", 1, "input", 3, "value"], ["i_deposito_editar", ""], ["type", "number", "placeholder", "Costo", 1, "input", 3, "value"], ["i_costo_editar", ""], [1, "field", "has-addons"], ["name", "senia", "type", "number", "placeholder", "Se\u00F1a", 1, "input", 3, "value"], ["i_senia_editar", ""], [1, "control", 3, "click"], [1, "button", "is-warning"], [1, "fas", "fa-calculator"], ["select_colaborador_editar", ""], ["select_estado_editar", ""], [3, "selected"], [1, "radio"], ["type", "radio", "name", "1", 3, "checked"], ["r_entregado_si_editar", ""], ["r_entregado_no_editar", ""], ["type", "radio", "name", "2", 3, "checked"], ["r_pagado_si_editar", ""], ["r_pagado_no_editar", ""], ["type", "radio", "name", "3", 3, "checked"], ["r_delivery_si_editar", ""], ["r_delivery_no_editar", ""], [1, "label", "my-2"], ["type", "date", "placeholder", "Fecha vencimiento", 1, "input", 3, "value"], ["i_fecha_vencimiento_editar", ""], ["placeholder", "Observaciones", 1, "textarea", 3, "value"], ["i_observaciones_editar", ""], [1, "modal-card-foot"], [1, "button", "is-success", 3, "click"], [1, "button", 3, "click"], [1, "container", "my-4"], ["name", "nombre", "type", "text", "placeholder", "Nombre", 1, "input"], ["i_nombre", ""], ["name", "apellido", "type", "text", "placeholder", "Apellido", 1, "input"], ["i_apellido", ""], [1, "button", "is-link"], [1, "fas", "fa-search"], ["name", "Identificacion", "type", "text", "placeholder", "DNI", 1, "input"], ["i_dni", ""], ["name", "tel_fijo", "type", "tel", "placeholder", "Telefono fijo", 1, "input"], ["i_tel_fijo", ""], ["name", "tel_celular", "type", "tel", "placeholder", "Telefono celular", 1, "input"], ["i_tel_cel", ""], ["name", "email", "type", "email", "placeholder", "Email", 1, "input"], ["i_email", ""], ["name", "domicilio", "type", "text", "placeholder", "Domicilio", 1, "input"], ["i_domicilio", ""], ["name", "entre", "type", "text", "placeholder", "Entre que calles", 1, "input"], ["i_entre", ""], ["name", "cp", "type", "text", "placeholder", "Codigo postal", 1, "input"], ["i_cp", ""], ["name", "costo_proveedor", "type", "number", "placeholder", "Costo proveedor", 1, "input"], ["i_costo_proveedor", ""], ["type", "number", "placeholder", "Deposito", 1, "input"], ["i_deposito", ""], ["name", "costo", "type", "number", "placeholder", "Costo", 1, "input", 3, "disabled"], ["i_costo", ""], ["name", "senia", "type", "number", "placeholder", "Se\u00F1a", 1, "input", 3, "disabled"], ["i_senia", ""], ["select_colaborador", ""], ["select_estado", ""], ["select_servicios", ""], [1, "column", "is-one-fifth"], [1, "panel"], [1, "panel-heading"], ["class", "panel-block", 4, "ngFor", "ngForOf"], ["type", "radio", "name", "entregado_proveedor"], ["r_entregado_si", ""], ["type", "radio", "name", "entregado_proveedor", "checked", ""], ["r_entregado_no", ""], ["type", "radio", "name", "pagado", 3, "click"], ["r_pagado_si", ""], ["type", "radio", "name", "pagado", "checked", "", 3, "click"], ["r_pagado_no", ""], ["type", "radio", "name", "delivery"], ["r_delivery_si", ""], ["type", "radio", "name", "delivery", "checked", ""], ["r_delivery_no", ""], ["name", "fecha_vencimiento", "type", "date", "placeholder", "Fecha vencimiento", 1, "input"], ["i_fecha_vencimiento", ""], ["placeholder", "Observaciones", 1, "textarea"], ["i_observaciones", ""], [1, "field", "is-grouped", "is-grouped-centered"], [1, "checkbox"], ["type", "checkbox", "checked", ""], ["checkObservaciones", ""], [1, "button", "is-success", "is-outlined", 3, "click"], [1, "panel-block"], [1, "panel-icon", "has-text-info", 3, "click"], [1, "fas", "fa-info-circle"], [1, "columns", "has-shadow"], ["name", "buscar_por"], ["selectBuscar", ""], ["selected", ""], ["type", "text", "placeholder", "Criterio", 1, "input", 3, "keyup.enter"], ["criterioBuscar", ""], ["name", "cambiar_estadp", 3, "disabled"], ["selectCambiarEstado", ""], ["type", "submit", 1, "button", "is-link", 3, "disabled", "click"], ["selectCambiarPagado", ""], [1, "table", "is-bordered"], [4, "ngIf"], [1, "navbar", "is-fixed-bottom"], [1, "navbar-start"], [1, "navbar-item"], [1, "table", "is-bordered", "my-4", "nav-bottom"], [1, "navbar-end"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_3_listener() { return ctx.setAgregarProtocolo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Agregar protocolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_6_listener() { return ctx.setVerProtocolos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ver protocolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_9_listener() { return ctx.setBuscarProtocolos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Buscar protocolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ItemsComponent_div_11_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ItemsComponent_table_12_Template, 67, 1, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ItemsComponent_div_13_Template, 48, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ItemsComponent_div_14_Template, 187, 31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ItemsComponent_div_15_Template, 193, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ItemsComponent_div_16_Template, 138, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ItemsComponent_nav_17_Template, 37, 0, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.verProtocolos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.verProtocolos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActiveEditar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.verAgregar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.verBuscar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.verProtocolos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".has-background-orange[_ngcontent-%COMP%] {\r\n    background-color: #ee8833;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    font-weight: bold;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    font-weight: bold;\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n    background-color: #EAEDED;\r\n}\r\n\r\ntfoot[_ngcontent-%COMP%] {\r\n    background-color: #EAEDED;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\r\n    padding-right: 40px;\r\n    padding-left: 40px;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\r\n    padding-right: 82px;\r\n    padding-left: 82px;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\r\n    padding-right: 57px;\r\n    padding-left: 57px;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(11) {\r\n    padding-right: 40px;\r\n    padding-left: 40px;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(12) {\r\n    padding-right: 26px;\r\n    padding-left: 26px;\r\n}\r\n\r\n.nav-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(14) {\r\n    padding-right: 26px;\r\n    padding-left: 26px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYXMtYmFja2dyb3VuZC1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlODgzMztcclxufVxyXG5cclxudGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVERUQ7XHJcbn1cclxuXHJcbnRmb290IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVERUQ7XHJcbn1cclxuXHJcbi5uYXYtYm90dG9tIHRoIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYtYm90dG9tIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4ubmF2LWJvdHRvbSB0aDpudGgtY2hpbGQoMykge1xyXG4gICAgcGFkZGluZy1yaWdodDogODJweDtcclxuICAgIHBhZGRpbmctbGVmdDogODJweDtcclxufVxyXG5cclxuLm5hdi1ib3R0b20gdGg6bnRoLWNoaWxkKDQpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDU3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU3cHg7XHJcbn1cclxuXHJcbi5uYXYtYm90dG9tIHRoOm50aC1jaGlsZCgxMSkge1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLm5hdi1ib3R0b20gdGg6bnRoLWNoaWxkKDEyKSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG59XHJcblxyXG4ubmF2LWJvdHRvbSB0aDpudGgtY2hpbGQoMTQpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cabecera/cabecera.component */ "sRu7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'Farmacia';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__["CabeceraComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios.service */ "uxTg");
/* harmony import */ var _colaboradores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colaboradores.service */ "GW67");
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes.service */ "MlxL");
/* harmony import */ var _base_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-datos.service */ "h0rA");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cabecera/cabecera.component */ "sRu7");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/servicios.component */ "A9Er");
/* harmony import */ var _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colaboradores/colaboradores.component */ "+lx/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _panel_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panel/barchart/barchart.component */ "KnB0");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _panel_ganancia_ganancia_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./panel/ganancia/ganancia.component */ "9o0v");
/* harmony import */ var _panel_ganancia_cliente_ganancia_cliente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panel/ganancia-cliente/ganancia-cliente.component */ "OsMm");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clientes/clientes.component */ "elN/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "8Y7J");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_base_datos_service__WEBPACK_IMPORTED_MODULE_3__["BaseDatosService"], _clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"], _colaboradores_service__WEBPACK_IMPORTED_MODULE_1__["ColaboradoresService"], _servicios_service__WEBPACK_IMPORTED_MODULE_0__["ServiciosService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__["CabeceraComponent"],
        _items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"],
        _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_9__["ServiciosComponent"],
        _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_10__["ColaboradoresComponent"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__["PanelComponent"],
        _panel_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_13__["BarchartComponent"],
        _panel_ganancia_ganancia_component__WEBPACK_IMPORTED_MODULE_15__["GananciaComponent"],
        _panel_ganancia_cliente_ganancia_cliente_component__WEBPACK_IMPORTED_MODULE_16__["GananciaClienteComponent"],
        _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ClientesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"]] }); })();


/***/ }),

/***/ "elN/":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../clientes.service */ "MlxL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function ClientesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientesComponent_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.isActive = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Domicilio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "CP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.nombre_completo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.tel_fijo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.tel_celular);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.domicilio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.nro_dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actualCliente.cp);
} }
function ClientesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientesComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const cliente_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r5.setActualCliente(cliente_r4.nombre_completo); return ctx_r5.isActive = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientesComponent_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const cliente_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.whatsappCliente(cliente_r4.tel_celular); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientesComponent_div_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const cliente_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.deleteCliente(cliente_r4.nombre_completo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cliente_r4.nombre_completo, " ");
} }
class ClientesComponent {
    constructor(bdClientes) {
        this.bdClientes = bdClientes;
        this.clientes = [];
        this.actualCliente = {};
        this.isActive = false;
    }
    ngOnInit() {
        this.bdClientes.getClientes().subscribe(res => {
            this.clientes = res;
        });
    }
    whatsappCliente(numero) {
        window.open(`https://api.whatsapp.com/send?phone=${numero}`);
    }
    setActualCliente(nombre) {
        this.bdClientes.getDatosClienteByNombre(nombre).subscribe(res => {
            this.actualCliente = res;
        });
    }
    deleteCliente(nombre) {
        let resp = confirm("¿Esta seguro que desea eliminar el cliente?");
        if (resp) {
            this.bdClientes.deleteCliente(nombre).subscribe(res => {
                console.log(res);
                this.bdClientes.getClientes().subscribe(res1 => {
                    this.clientes = res1;
                });
            });
        }
    }
}
ClientesComponent.ɵfac = function ClientesComponent_Factory(t) { return new (t || ClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_clientes_service__WEBPACK_IMPORTED_MODULE_0__["ClientesService"])); };
ClientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientesComponent, selectors: [["app-clientes"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_clientes_service__WEBPACK_IMPORTED_MODULE_0__["ClientesService"]])], decls: 3, vars: 2, consts: [[1, "container-fluid"], ["class", "modal is-active", 4, "ngIf"], ["class", "card mx-6 my-2", 4, "ngFor", "ngForOf"], [1, "modal", "is-active"], [1, "modal-background", 3, "click"], [1, "modal-card"], [1, "modal-card-head", "has-background-success-dark"], [1, "modal-card-title", "has-text-white"], [1, "modal-card-body"], [1, "columns"], [1, "column", "has-text-centered"], [1, "my-2"], [1, "card", "mx-6", "my-2"], [1, "card-header"], [1, "navbar-menu", "is-spaced"], [1, "navbar-start"], [1, "navbar-item"], [1, "navbar-end"], [1, "button", "is-primary", "mx-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-address-card"], [1, "button", "is-success", "mx-4", 3, "click"], [1, "fab", "fa-2x", "fa-whatsapp"], [1, "button", "is-danger", "mx-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-trash-alt"]], template: function ClientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientesComponent_div_1_Template, 40, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClientesComponent_div_2_Template, 16, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clientes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@media screen and (min-width: 500px) {\r\n    .navbar[_ngcontent-%COMP%], .navbar-end[_ngcontent-%COMP%], .navbar-menu[_ngcontent-%COMP%], .navbar-start[_ngcontent-%COMP%] {\r\n        display: flex!important;\r\n        flex-grow: 1;\r\n        flex-shrink: 0;\r\n        \r\n    }\r\n\r\n    .navbar-end[_ngcontent-%COMP%] {\r\n        justify-content: flex-end;\r\n        margin-left: auto;\r\n    }\r\n    .card-header[_ngcontent-%COMP%] {\r\n        background: transparent!important;\r\n        box-shadow: none!important;\r\n        border: none!important;\r\n        display: block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osY0FBYzs7SUFFbEI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0QixjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoiY2xpZW50ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubmF2YmFyLCAubmF2YmFyLWVuZCwgLm5hdmJhci1tZW51LCAubmF2YmFyLXN0YXJ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1lbmQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "gp3a":
/*!**************************!*\
  !*** ./src/app/URL.json ***!
  \**************************/
/*! exports provided: URL, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"URL\":\"http://192.168.1.56:4580/api\"}");

/***/ }),

/***/ "h0rA":
/*!***************************************!*\
  !*** ./src/app/base-datos.service.ts ***!
  \***************************************/
/*! exports provided: BaseDatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDatosService", function() { return BaseDatosService; });
/* harmony import */ var _URL_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URL.json */ "gp3a");
var _URL_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./URL.json */ "gp3a", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class BaseDatosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.items = [];
        this.URL_API = _URL_json__WEBPACK_IMPORTED_MODULE_0__.URL;
    }
    // GET
    getItems() {
        return this.httpClient.get(this.URL_API);
    }
    getItemsByNroProt(nro) {
        return this.httpClient.get(this.URL_API + `/nro/${nro}`);
    }
    getItemsByDate(date) {
        return this.httpClient.get(this.URL_API + `/date/${date}`);
    }
    getItemsByNombre(nombre) {
        return this.httpClient.get(this.URL_API + `/nombre/${nombre}`);
    }
    getItemsByApellido(apellido) {
        return this.httpClient.get(this.URL_API + `/apellido/${apellido}`);
    }
    getItemsByState(state) {
        return this.httpClient.get(this.URL_API + `/state/${state}`);
    }
    getItemsByDNI(dni) {
        return this.httpClient.get(this.URL_API + `/dni/${dni}`);
    }
    getItemsByDescripcion(descripcion) {
        return this.httpClient.post(this.URL_API + `/observaciones`, { descripcion });
    }
    // POST
    postProtocolo(protocolo) {
        return this.httpClient.post(this.URL_API, protocolo);
    }
    // PATCH 
    patchEstadoProtocolo(estado) {
        return this.httpClient.patch(this.URL_API + "/cambiar/estado", estado);
    }
    patchPagadoProtocolo(pagado) {
        return this.httpClient.patch(this.URL_API + "/cambiar/pagado", pagado);
    }
    patchProtocolo(protocolo) {
        return this.httpClient.patch(this.URL_API, protocolo);
    }
    //  DELETE
    deleteProtocolo(id) {
        return this.httpClient.delete(this.URL_API + `/${id}`);
    }
}
BaseDatosService.ɵfac = function BaseDatosService_Factory(t) { return new (t || BaseDatosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaseDatosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseDatosService, factory: BaseDatosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sRu7":
/*!************************************************!*\
  !*** ./src/app/cabecera/cabecera.component.ts ***!
  \************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class CabeceraComponent {
    constructor() { }
    ngOnInit() {
    }
}
CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) { return new (t || CabeceraComponent)(); };
CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabeceraComponent, selectors: [["app-cabecera"]], decls: 38, vars: 0, consts: [[1, "navbar-menu", "m-2", "has-background-success-dark"], [1, "navbar-start"], [1, "image", "is-128x128"], ["src", "../../assets/logoY.jpeg"], [1, "navbar-item", "is-size-1", "has-text-white-bis", "has-text-centered", 2, "margin", "auto", "padding-right", "11rem"], [1, "tabs", "is-centered", "is-toggle", "is-fullwidth"], ["routerLink", "/items", "routerLinkActive", "active", 1, "has-background-success", "has-text-white-bis"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-clinic-medical"], ["routerLink", "/colaboradores", "routerLinkActive", "active", 1, "has-background-success", "has-text-white-bis"], ["aria-hidden", "true", 1, "fas", "fa-address-book"], ["routerLink", "/servicios", "routerLinkActive", "active", 1, "has-background-success", "has-text-white-bis"], ["aria-hidden", "true", 1, "fas", "fa-briefcase"], ["routerLink", "/clientes", "routerLinkActive", "active", 1, "has-background-success", "has-text-white-bis"], ["aria-hidden", "true", 1, "fas", "fa-address-card"], ["routerLink", "/panel", "routerLinkActive", "active", 1, "has-background-success", "has-text-white-bis"], ["aria-hidden", "true", 1, "fas", "fa-home"]], template: function CabeceraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Farmacia YUVONE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protocolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Colaboradores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWJlY2VyYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "uxTg":
/*!**************************************!*\
  !*** ./src/app/servicios.service.ts ***!
  \**************************************/
/*! exports provided: ServiciosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosService", function() { return ServiciosService; });
/* harmony import */ var _URL_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URL.json */ "gp3a");
var _URL_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./URL.json */ "gp3a", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ServiciosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = _URL_json__WEBPACK_IMPORTED_MODULE_0__.URL;
    }
    getServicios() {
        return this.httpClient.get(this.URL_API + "/servicios");
    }
    postServicio(servicio) {
        return this.httpClient.post(this.URL_API + "/servicios", servicio);
    }
    deleteServicio(id) {
        return this.httpClient.delete(this.URL_API + `/servicios/${id}`);
    }
}
ServiciosService.ɵfac = function ServiciosService_Factory(t) { return new (t || ServiciosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ServiciosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiciosService, factory: ServiciosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes/clientes.component */ "elN/");
/* harmony import */ var _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios/servicios.component */ "A9Er");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colaboradores/colaboradores.component */ "+lx/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");








const routes = [
    { path: 'items', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] },
    { path: 'colaboradores', component: _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_3__["ColaboradoresComponent"] },
    { path: 'panel', component: _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"] },
    { path: 'servicios', component: _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosComponent"] },
    { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_0__["ClientesComponent"] },
    { path: '**', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map