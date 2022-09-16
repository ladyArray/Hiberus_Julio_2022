// rconst -> genera clase con el constructor

import React, { Component } from 'react'
import { ProgressBar } from 'react-foundation-components/lib/progress-bar';


export class BarraProgresoDinamica extends Component {

    temporizador;

    constructor(){
        super();
        this.state = {
            valor: 0
        }
    }

    incrementar = () => {
        let i = this.state.valor;
        i++;

        if (this.temporizador){
            clearTimeout(this.temporizador);
        }

        this.temporizador = setTimeout(() => {
            if (i<= 100){
                this.setState({valor: i});
            }
        }, 100);
        
        return parseInt(i)
    }

    render() {
        return (
            <div>
                <ProgressBar min={0} max={100} value={this.incrementar()} />
            </div>
        )
    }
}

export default BarraProgresoDinamica