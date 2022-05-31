import React from 'react'

const PdfBodyText = (VerificationAct) => {
  return (
    <div className="pdf-body-text">
        <div>
            Мы, нижеподписавшиеся, {VerificationAct.OwnerFizFio} от имени {VerificationAct.OwnerName}, с одной стороны, и {VerificationAct.PartnerFizFio} 
            {''} от имени {VerificationAct.PartnerName} , с другой стороны, составили настоящий акт сверки о том, что состояние 
            взаимных расчётов по данным учёта следующее:
          </div>
    </div>
  )
}

export default PdfBodyText