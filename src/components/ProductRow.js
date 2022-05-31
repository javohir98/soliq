import React from 'react'

const ProductRow = (props) => {
    const { i, CatalogCode, CatalogName, MeasureId, Count, Summa, DeliverySum, VatRate, VatSum, TotalSum } = props
  return (
    <tr>
        <td>{i}</td>
        <td>x</td>
        <td><span>{CatalogCode}</span> - <span>{CatalogName}</span></td>
        <td>{MeasureId}</td>
        <td>{Count}</td>
        <td>{Summa}</td>
        <td>{DeliverySum}</td>
        <td>{VatRate}</td>
        <td>{VatSum}</td>
        <td>{TotalSum}</td>
    </tr>
  )
}

export default ProductRow