import React, { Component } from 'react'

import { Button } from 'react-foundation-components/lib/button';
import { ButtonGroup } from 'react-foundation-components/lib/button-group';

export class Botones extends Component {
  render() {
    return (
      <div>
        <Button>Pulsame</Button>

        <div>
            <Button color="primary">Color primary</Button>
            <Button color="secondary">Color secondary</Button>
            <Button color="alert">Color alert</Button>
            <Button color="warning">Color warning</Button>
            <Button color="success">Color success</Button>
        </div>

        <div>
            <Button size="tiny">Diminuto</Button>
            <Button size="small">Pequeño</Button>
            <Button>Mediano</Button>
            <Button size="large">Grande</Button>
            <Button expanded>Parrafo</Button>
        </div>

        <ButtonGroup>
            <Button color="primary" hollow>Color primary</Button>
            <Button color="secondary" dropdown>Color secondary</Button>
            <Button color="alert">Color alert</Button>
            <Button color="warning">Color warning</Button>
            <Button color="success">Color success</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Botones