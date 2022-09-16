// rfce -> genera funcion
// rce -> genera clase

import React from 'react'
import { ProgressBar } from 'react-foundation-components/lib/progress-bar';

function porcentaje(percent){
    const rounded = Math.round(percent * 100);
    return `${rounded}`
}

function BarraProgreso() {
  return (
    <div>
        <ProgressBar />
        <ProgressBar value={50} />
        <ProgressBar color="alert" value={25} />
        <ProgressBar min={0} max={20} value={10} />
        <ProgressBar value={50} labelFormatter={porcentaje} />
    </div>
  )
}

export default BarraProgreso