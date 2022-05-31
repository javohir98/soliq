import React from 'react'
import PdfBodyText from '../PdfBodyText';
import PdfMain from '../PdfMain';
import Table from '../Table';
import { VerificationAct } from '../../data';
import PdfBottom from '../PdfBottom';

export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} className='container'>
        <PdfMain {...VerificationAct} />
        <PdfBodyText {...VerificationAct} />
        <div className="pdf-table-wrapper">
          <Table />
          <PdfBottom 
            SellerDirector='John Doe' 
            SellerAccountant='John Doe Account' 
            BuyerAccountant='Jim Carry Account' 
            BuyerDirector='Jim Carry' 
            send_type='accept'
          />
        </div>
      </div>
    );
});