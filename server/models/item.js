// 
class Item {
    constructor(cod_cliente, fecha, servicio, nombre_cliente, telefono, observaciones, costo_proveedor, costo, senia, colaborador, estado, estado_actual, entregado_prov) {
        this.cod_cliente = cod_cliente;
        this.fecha = fecha;
        this.servicio = servicio;
        this.nombre_cliente = nombre_cliente;
        this.telefono = telefono;
        this.observaciones = observaciones;
        this.costo_proveedor = costo_proveedor;
        this.costo = costo;
        this.senia = senia;
        this.falta_abonar = costo - senia;
        this.colaborador = colaborador;
        this.estado = estado;
        this.estado_actual = estado_actual;
        this.entregado_prov = entregado_prov;
    }
}
module.exports = Item