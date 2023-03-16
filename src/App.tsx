import React from 'react';
import './App.css';
import { DatePicker, DatePickerInput } from 'carbon-components-react';
import { Layout } from './pages/layout';

function App() {
  const props = {
    datePicker: () => ({
      
    }),
    datePickerInput: () => ({
      id: 'date-picker-input-id',
      className: 'some-class',
      labelText: 'Date Picker label',
      placeholder: 'mm/dd/yyyy',
      disabled: false,
      invalid: false,
      invalidText: 'A valid value is required',
      iconDescription: 'Icon description',
      onClick: console.log('onClick'),
      onChange: console.log('onInputChange'),
    }),
  };
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
