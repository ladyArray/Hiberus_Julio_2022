import React, { Component } from 'react'
import { Switch, SwitchCheckedLabel, SwitchUncheckedLabel, RadioSwitch} 
    from 'react-foundation-components/lib/switch';


export class Switchs extends Component {

    state = { activeKey: null };

    handleSelect = (activeKey) => {
        this.setState({ activeKey });
        alert(activeKey);
    }
    

  render() {
    return (
      <div>
        <Switch />
        <Switch defaultChecked />

        <div>
            <Switch size="tiny"></Switch>
            <Switch size="small"></Switch>
            <Switch></Switch>
            <Switch size="large"></Switch>
        </div>

        <div>
            <Switch>
                <SwitchCheckedLabel>On</SwitchCheckedLabel>
                <SwitchUncheckedLabel>Off</SwitchUncheckedLabel>
            </Switch>
        </div>

        <RadioSwitch activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <Switch eventKey="1" />
          <Switch eventKey="2" />
          <Switch eventKey="3" />
        </RadioSwitch>
      </div>
    )
  }
}

export default Switchs