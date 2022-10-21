import React, {useEffect, useState} from 'react'
import Producto from './producto'
import {Row, Col, Drawer} from 'antd'
import './productoList.css'
import ProductoEdit from './productoEdit'
import axios from 'axios'

const data = [
    { nombre: 'cocacola', precio: 1350, descripcion: "Formato: 2000cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'fanta', precio: 1220, descripcion: "Formato: 2200cc | Material: Vidrio | Retornable: No" },
    { nombre: 'sprite', precio: 1310, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'tomy cola', precio: 1150, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: No" },
    { nombre: 'Pepsi', precio: 1280, descripcion: "Formato: 2000cc | Material: Vidrio | Retornable: Si" },
    { nombre: 'Kem', precio: 1350, descripcion: "Formato: 2500cc | Material: Vidrio | Retornable: Si" }
]

const ProductoList = () => {
    const [open, setOpen] = useState(false);
    const [items,setItems] = useState(data)

    useEffect(()=>{
      axios.get("https://g9cd7530b8a8613-db20220530152721.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/")
      .then((datos)=>{
        setItems(datos.data.items)
      })

    },[])
      const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    return (
        <>
        <Row >
            {
                items.map(elemento => {
                    return (
                        <Col className='separador'>
                            <Producto data={elemento} onClick={showDrawer} />
                        </Col>)
                })
            }
        </Row>
        <ProductoEdit title="Basic Drawer" placement="right" onClose={onClose} open={open} />

        </>
    )
}

export default ProductoList;