import './App.css';
import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es);

class App extends React.Component {

  constructor(){
    super();

    this.state = {fecha: new Date()}
  }
  
  handleChange = (nuevaFecha) => {
    this.setState({
      fecha: nuevaFecha
    })
  }

  render(){
    return (
      <div className="App">
        <DatePicker
          selected={this.state.fecha}
          dateFormat='dd/MM/yyyy'
          onChange={this.handleChange} />

        <DatePicker
          showYearDropdown
          showWeekNumbers
          selected={this.state.fecha}
          dateFormat='dd/MM/yyyy'
          onChange={this.handleChange}
          locale='es' />

        <DatePicker
          showTimeSelect
          selected={this.state.fecha}
          dateFormat='dd/MM/yyyy h:mm aa'
          onChange={this.handleChange} 
          timeIntervals={15}
          timeCaption="Hora"/>
      </div>
    );
  }
}

export default App;
