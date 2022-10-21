import React  from "react"
import { Drawer } from "antd"
const ProductoEdit = (props) => {

    return(
    <Drawer title={props.title} placement="right" onClose={props.onClose} open={props.open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    )
}
export default ProductoEdit;