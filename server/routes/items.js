const { Router } = require('express');
const router = Router();
const sqlite3 = require('sqlite3');
let fechaActual = new Date()
const db = new sqlite3.Database(`./farmacia_${fechaActual.getFullYear()}_${fechaActual.getMonth() <= 5 ? "S1" : "S2"}.db`, (err) => {
    if (err) {
        console.error("Error abriendo base de datos: " + err.message);
    } else {

        db.run('CREATE TABLE protocolos( \
            nro_protocolo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,\
            fecha NVARCHAR(20)  NOT NULL,\
            nombre_cliente NVARCHAR(60) NOT NULL,\
            apellido_cliente NVARCHAR(60) NOT NULL,\
            dni INTEGER,\
            tel_fijo NVARCHAR(20),\
            tel_celular NVARCHAR(20),\
            email NVARCHAR(60),\
            domicilio NVARCHAR(80),\
            entre_calles NVARCHAR(160),\
            cp NVARCHAR(14),\
            servicio NVARCHAR(60)  NOT NULL,\
            observaciones NVARCHAR(160),\
            costo_proveedor REAL,\
            deposito REAL,\
            costo REAL,\
            senia REAL,\
            falta_abonar REAL,\
            pagado NVARCHAR(5),\
            delivery NVARCHAR(5),\
            colaborador NVARCHAR(30),\
            estado NVARCHAR(30),\
            fecha_vencimiento NVARCHAR(20),\
            entregado_prov NVARCHAR(5)\
            )', (err) => {
                if (err) {
                    console.log("Ya existe protocolos");
                }
            });
        db.run(`CREATE TABLE colaboradores(
                Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
                nombre NVARCHAR(80) NOT NULL
                )`,
            (err) => {
                if(err) {
                    console.log("Ya existe colaboradores")
                }
            });
        db.run(`CREATE TABLE clientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
            nro_dni INTEGER,
            nombre_completo NVARCHAR(120) NOT NULL UNIQUE,
            tel_fijo NVARCHAR(30),
            tel_celular NVARCHAR(30),
            email NVARCHAR(80),
            domicilio NVARCHAR(80),
            entre_calles NVARCHAR(160),
            cp NVARCHAR(40)
            )`,
            (err) => {
                if(err) {
                    console.log("Ya existe clientes")
            }
        });
        db.run(`CREATE TABLE servicios(
            id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
            servicio NVARCHAR(75) NOT NULL
            )`,
            (err) => {
                if(err) {
                    console.log("Ya existe servicios")
            }
        });
    }
});

router.get('', (req, res)=>{
    try {
        db.all(`SELECT * FROM protocolos ORDER BY nro_protocolo DESC`, [], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }

})

router.post('', (req, res)=>{
    try {
        let reqBody = req.body;
        db.run(`INSERT INTO protocolos (nro_protocolo, fecha, nombre_cliente, apellido_cliente, dni, tel_fijo, tel_celular, email, domicilio, entre_calles, cp, servicio, observaciones, costo_proveedor, deposito, costo, senia, falta_abonar, pagado, delivery, colaborador, estado, fecha_vencimiento, entregado_prov) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [null, reqBody.fecha, reqBody.nombre_cliente, reqBody.apellido_cliente, reqBody.dni, reqBody.tel_fijo, reqBody.tel_celular, reqBody.email, reqBody.domicilio, reqBody.entre_calles, reqBody.cp, reqBody.servicio, reqBody.observaciones, reqBody.costo_proveedor, reqBody.deposito, reqBody.costo, reqBody.senia, reqBody.falta_abonar, reqBody.pagado, reqBody.delivery, reqBody.colaborador, reqBody.estado, reqBody.fecha_vencimiento, reqBody.entregado_prov],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                protocolo_id: this.lastID
            })
        });
    } catch (err) {
        res.status(400).json({ "error": err.message })
    }
})

router.patch('', (req, res)=>{
    try {
        let reqBody = req.body;
        db.run(`UPDATE protocolos SET nombre_cliente = ?, apellido_cliente = ?, dni = ?, tel_fijo = ?, tel_celular = ?, email = ?, domicilio = ?, entre_calles = ?, cp = ?, servicio = ?, observaciones = ?, costo_proveedor = ?, deposito = ?, costo = ?, senia = ?, falta_abonar = ?, pagado = ?, delivery = ?, colaborador = ?, estado = ?, fecha_vencimiento = ?, entregado_prov = ? WHERE nro_protocolo = ?`,
        [reqBody.nombre_cliente, reqBody.apellido_cliente, reqBody.dni, reqBody.tel_fijo, reqBody.tel_celular, reqBody.email, reqBody.domicilio, reqBody.entre_calles, reqBody.cp, reqBody.servicio, reqBody.observaciones, reqBody.costo_proveedor, reqBody.deposito, reqBody.costo, reqBody.senia, reqBody.falta_abonar, reqBody.pagado, reqBody.delivery, reqBody.colaborador, reqBody.estado, reqBody.fecha_vencimiento, reqBody.entregado_prov, reqBody.nro_protocolo],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ updatedID: this.changes });
        });
    } catch (err) {
        res.status(400).json({ "error": res.message })
    }
})

router.get('/date/:fecha', (req, res)=>{
    try {
        db.all(`SELECT * FROM protocolos where fecha = ?`, [req.params.fecha], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.get('/nro/:id', (req, res)=>{
    try {
        db.get(`SELECT * FROM protocolos where nro_protocolo = ?`, [req.params.id], (err, row) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json([row]);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.get('/state/:state', (req, res)=>{
    try {
        db.all(`SELECT * FROM protocolos where UPPER(estado) = UPPER(?) ORDER BY nro_protocolo DESC`, [req.params.state], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.get('/nombre/:nombre/', (req, res)=>{
    try {
        db.all(`SELECT * FROM protocolos WHERE LOWER(nombre_cliente) LIKE '${req.params.nombre ? req.params.nombre.toLowerCase() : "%"}%' ORDER BY nro_protocolo DESC`, [/*req.params.nombre, req.params.apellido*/], (err, rows) => {
            if (err) {
                console.log(err.message)
                res.status(400).json({"error":err.message});
                return;
            }
            console.log(rows)
            res.status(200).json(rows);
          });
    } catch (err) {
        console.log("Error en el nombre")
    }
})

router.post("/observaciones", (req, res)=>{
    try {
        console.log("Observaciones: " + req.body.descripcion.toLowerCase())
        db.all(`SELECT * FROM protocolos WHERE LOWER(observaciones) LIKE '%${req.body.descripcion != 'undefined' ? req.body.descripcion.toLowerCase() : ""}%' ORDER BY nro_protocolo DESC`, [/*req.params.nombre, req.params.apellido*/], (err, rows) => {
            if (err) {
                console.log("ERROR OBS: ", err)
                res.status(404).json({error:err});
            } else {
                console.log(rows)
                res.status(200).json(rows);
            }
        })
    } catch (err) {
        console.log("Error en apellido")
    }
})

router.get('/apellido/:apellido/', (req, res)=>{
    try {
        console.log("Apellido: " + req.params.apellido.toLowerCase())
        db.all(`SELECT * FROM protocolos WHERE LOWER(apellido_cliente) LIKE '${req.params.apellido != 'undefined' ? req.params.apellido.toLowerCase() : "%"}%' ORDER BY nro_protocolo DESC`, [/*req.params.nombre, req.params.apellido*/], (err, rows) => {
            if (err) {
                console.log(err.message)
                res.status(404).json({"error":err.message});
                return;
              }
              console.log(rows)
              res.status(200).json(rows);
        })
    } catch (err) {
        console.log("Error en apellido")
    }
})

router.get('/dni/:dni', (req, res)=>{
    try {
        db.all(`SELECT * FROM protocolos where dni = ? ORDER BY nro_protocolo DESCC`, [req.params.dni], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            console.log("anteriores: ",rows);
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.patch('/cambiar/estado', (req, res) => {
    try {
        db.run(`UPDATE protocolos set estado = ? WHERE nro_protocolo = ?`,
        [req.body.estado, req.body.nro_protocolo],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ updatedID: this.changes });
        });
    } catch (err) {
        res.status(400).json({ "error": res.message })
    }
});

router.patch('/cambiar/pagado', (req, res) => {
    try {
        db.run(`UPDATE protocolos set pagado = ? WHERE nro_protocolo = ?`,
        [req.body.pagado, req.body.nro_protocolo],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ updatedID: this.changes });
        });
    } catch (err) {
        res.status(400).json({ "error": res.message })
    }
});


router.delete("/:id", (req, res)=>{
    db.run(`DELETE FROM protocolos WHERE nro_protocolo = ?`,
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ deletedID: this.changes })
        });
})

// COLABORADORES DATABASE

router.get('/colaboradores', (req, res) => {
    try {
        db.all(`SELECT * FROM colaboradores`, [], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.post('/colaboradores', (req, res) => {
    try {
        db.run(`INSERT INTO colaboradores (Id, nombre) VALUES (?,?)`, [null, req.body.nombre], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
});

router.delete('/colaboradores/del/:id', (req, res) => {
    try {
        db.run(`DELETE FROM colaboradores WHERE Id = ?`, req.params.id, (err, row) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json({ deletedID: this.changes })
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
});

// CLIENTES DATABASE

router.get('/clientes', (req, res) => {
    try {
        db.all(`SELECT * FROM clientes ORDER BY nombre_completo`, [], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(rows);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.get('/clientes/:nombre/:apellido', (req, res) => {
    try {
        console.log(`SELECT * FROM clientes WHERE nombre_completo = ?`)
        db.get(`SELECT * FROM clientes WHERE nombre_completo = ?`, [`${req.params.nombre} ${req.params.apellido}`], (err, row) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json(row);
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.post('/clientes', (req, res)=>{
    try {
        let reqBody = req.body;
        db.run(`INSERT INTO clientes (id, nro_dni, nombre_completo, tel_fijo, tel_celular, email, domicilio, entre_calles, cp) VALUES (?,?,?,?,?,?,?,?,?)`,
        [null, reqBody.nro_dni, reqBody.nombre_completo, reqBody.tel_fijo, reqBody.tel_celular, reqBody.email, reqBody.domicilio, reqBody.entre_calles, reqBody.cp],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "clientes_id": this.lastID
            })
        });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.patch('/clientes', (req, res)=>{
    try {
        let reqBody = req.body;
        db.run(`UPDATE clientes SET nro_dni = ?, tel_fijo = ?, tel_celular = ?, email = ?, domicilio = ?, entre_calles = ?, cp = ? WHERE nombre_completo = ?`,
        [reqBody.nro_dni, reqBody.tel_fijo, reqBody.tel_celular, reqBody.email, reqBody.domicilio, reqBody.entre_calles, reqBody.cp, reqBody.nombre_completo],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(200).json({ updatedID: this.changes });
        });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.delete("/clientes/:nombre/:apellido", (req, res)=>{
    db.run(`DELETE FROM clientes WHERE nombre_completo = ?`,
        `${req.params.nombre} ${req.params.apellido}`,
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ deletedID: this.changes })
        });
})

// SERVICIOS

router.get('/servicios', (req, res)=>{
    try {
        db.all(`SELECT * FROM servicios`, [], (err, rows)=>{
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })

    } catch (err) {
        res.status(400).json({"error":err.message})
    }
});

router.post('/servicios', (req, res)=>{
    try {
        let reqBody = req.body;
        db.run(`INSERT INTO servicios (id, servicio) VALUES (?,?)`,
        [null, reqBody.servicio],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "clientes_id": this.lastID
            })
        });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

router.delete('/servicios/:id', (req, res)=>{
    try {
        db.run(`DELETE FROM servicios WHERE id = ?`, req.params.id, (err, row) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.status(200).json({ deletedID: this.changes })
          });
    } catch (err) {
        res.status(400).json({"error":err.message})
    }
})

module.exports = router;