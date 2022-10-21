import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { Form, Card } from 'react-bootstrap'

const BrandBar = observer(() => {

  const { device } = useContext(Context);
  return (
    <Form className="d-flex ">
      {device.brands.map((brand) => (
        <Card
          key={brand._id}
          className="p-3 me-1"
          style={{ cursor: "pointer" }}
          border={brand._id === device.selectedBrand._id ? "info" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </Form>
  );
})

export default BrandBar