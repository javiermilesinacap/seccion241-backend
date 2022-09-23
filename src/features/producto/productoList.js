import React from 'react'
import Producto from './producto'
import {Row, Col} from 'antd'
import './productoList.css'

const items = [
    { nombre: 'cocacola', precio: 1350, descripcion: "Formato: 2000cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'fanta', precio: 1220, descripcion: "Formato: 2200cc | Material: Vidrio | Retornable: No" },
    { nombre: 'sprite', precio: 1310, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'tomy cola', precio: 1150, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: No" },
    { nombre: 'Pepsi', precio: 1280, descripcion: "Formato: 2000cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'Kem', precio: 1350, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: Si" }
]

const productoList = () => {
    return (
        <Row >
            {
                items.map(elemento => {
                    return (
                        <Col className='separador'>
                            <Producto data={elemento} />
                        </Col>)
                })
            }
        </Row>
    )
}

export default productoList;