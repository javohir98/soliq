import React from 'react'
import ProductRow from './ProductRow'
import { Data } from '../data'

const TableBody = () => {
  return (
    <tbody>
        {Data.Act.ProductList.Products.map((item, index) => (
            <ProductRow 
                key={index}
                i={index + 1}
                CatalogCode={item.CatalogCode}
                CatalogName={item.CatalogName}
                MeasureId={item.MeasureId}
                Count={item.Count}
                Summa={item.Summa}
                DeliverySum={item.DeliverySum}
                VatRate={item.VatRate}
                VatSum={item.VatSum}
                TotalSum={item.TotalSum} 
            />
        ))}
    </tbody>
  )
}

export default TableBody