import React from 'react'

const PdfBottom = ({SellerDirector, SellerAccountant, BuyerAccountant, BuyerDirector, send_type='sent'}) => {
  return (
    <>
        <div className='pdf-bottom'>
            <div>
                <div style={{display: "-webkit-box"}}>
                    <div style={{fontWeight: 'bold', marginRight: '5mm', fontSize: '14px'}}>Rahbar: </div>
                    <div className="pdf-bottom-value" style={{fontSize: '14px'}}>{SellerDirector}</div>
                </div>
                <div style={{display: "-webkit-box"}}>
                    <div style={{fontWeight: 'bold', marginRight: '5mm', fontSize: '14px'}}>Bosh buxgalter: </div>
                    <div className="pdf-bottom-value" style={{fontSize: '14px'}}>{SellerAccountant}</div>
                </div>
                <div style={{display: "-webkit-box"}}>
                    <div style={{fontWeight: 'bold', marginRight: '5mm', fontSize: '14px'}}>Tovar berdi: </div>
                    <div className="pdf-bottom-value" style={{fontSize: '14px'}}></div>
                </div>
            </div>
            <div>
                <div className="pdf-bottom-text-wrapper">
                    <div className="pdf-bottom-key" style={{fontSize: '14px'}}>Rahbar: </div>
                    <div className="pdf-bottom-value" style={{fontSize: '14px'}}>{BuyerDirector}</div>
                </div>
                <div className="pdf-bottom-text-wrapper">
                    <div className="pdf-bottom-key" style={{fontSize: '14px'}}>Bosh buxgalter: </div>
                    <div className="pdf-bottom-value" style={{fontSize: '14px'}}>{BuyerAccountant}</div>
                </div>
            </div>
        </div>
        <div className='pdf-bottom'>
            <div className={`pdf-bottom-sign-status pdf-bottom-sign-status-${send_type}`}>
                <div className="pdf-bottom-sign-status-top">
                    <div>No2004753382</div>
                    <div>19.04.2022 19:50:28</div>
                </div>
                <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#666'}}>
                    {send_type === 'sent' ? 'YUBORILGAN' : send_type === 'accept' ? 'QABUL QILINGAN' : 'RAD ETILGAN'}
                </div>
                <div
                    style={{fontSize: '12px', borderBottom: '1px solid #999', fontWeight: '600', marginBottom: '5px', paddingBottom: '5px', color: '#666'}}>
                    MUXAMMADOV NODIR KARIMOVICH</div>
                <div style={{fontSize: '12px', color: '#666'}}>operator: didox.uz</div>
            </div>
        </div>
    </>
  )
}

export default PdfBottom