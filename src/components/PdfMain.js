import React from 'react'
import logo from '../assets/729px-Emblem_of_Uzbekistan.svg.png'

const PdfMain = (VerificationAct) => {
  return (
    <div className="pdf-main">
      <div className="pdf-top">
        <div className="pdf-id" style={{marginTop: "4mm", marginLeft: "5mm", width: "285px"}}>
          <div>
            <span style={{fontWeight: "bold", fontSize: "12px"}}>ID: </span>{VerificationAct.VerificationActId}
          </div>
        </div>
        <div className="pdf-top-title">
          <div style={{fontWeight: 'bold', fontSize: '20px', marginTop: '7mm'}}>АКТ СВЕРКИ</div>
          <div className="pdf-top-text">
            <div>взаимных расчётов между <span style={{fontWeight: 'bold', fontSize: '14px'}}>{VerificationAct.OwnerName}</span>
            </div>
            <div>и <span style={{fontWeight: 'bold', fontSize: '14px'}}>{VerificationAct.PartnerName}</span>
            </div>
            <div>№ <span style={{fontWeight: 'bold', fontSize: '14px'}}>{VerificationAct.VerificationActDoc.VerificationActNo}</span>
            </div>
            <div>от <span style={{fontWeight: 'bold', fontSize: '14px'}}>{VerificationAct.VerificationActDoc.VerificationActDate}</span>
            </div>
          </div>
        </div>
        <div className="pdf_qrcode">
          <img src={logo} width="120" height="120" />
        </div>
      </div>
    </div>
  )
}

export default PdfMain