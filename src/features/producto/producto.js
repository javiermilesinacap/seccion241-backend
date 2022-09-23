import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, { useState } from 'react';
const { Meta } = Card;

const Producto = (props) =>{
  const [nombre, setNombre] = useState(props.data.nombre);
  const [precio,setPrecio] = useState(props.data.precio);
  const [descripcion,setDescripcion] = useState(props.data.descripcion);

  return (  
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={nombre}
      description={descripcion + " Precio: "+ precio}
    />
  </Card>
);
} 

export default Producto;