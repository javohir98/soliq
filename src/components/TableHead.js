import React from 'react'

const TableHead = () => {
  return (
    <thead id='header'>
        <tr>
            <th rowSpan="2">No</th>
            <th rowSpan="2">Mahsulot yoki xizmatga izoh</th>
            <th rowSpan="2">Tovar (xizmat)lar Yagona elektron milliy katalogi bo'yicha
                identifikatsiya kodi va nomi</th>
            <th rowSpan="2">O'lchov birligi</th>
            <th rowSpan="2">Miqdori</th>
            <th rowSpan="2">Narxi</th>
            <th rowSpan="2">Yetkazib berish qiymati</th>
            <th colSpan="2">QQS</th>
            <th rowSpan="2">QQSni hisobga olgan holda yetkazib berish qiymati</th>
        </tr>
        <tr>
            <th>Stavkasi</th>
            <th>Narxi</th>
        </tr>
        <tr>
            <th>x</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
        </tr>
    </thead>
  )
}

export default TableHead