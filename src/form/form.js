import React, { Component } from 'react';


function MiBoton (props) {
    var valor = 2;
    return (
        <button type="button" onClick={(e) => props.onClick(valor)} >Submit</button>
    )
}

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {valor: 0}

        this.onSumbit = this.onSumbit.bind(this)
    }

    onSumbit (miValor) {
        // fetch
        this.setState({valor: miValor})
    }

    render() {
        return (
            <div>
                Mi valor actual es {this.state.valor}
                <MiBoton onClick={this.onSumbit} />
            </div>
        );
    }

}

