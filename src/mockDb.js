// src/mockDb.js
let data = [
    { name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
    { name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
  ];
  
  export const addData = (item) => {
    data.push(item);
  };
  
  export const deleteData = (index) => {
    data.splice(index, 1);
  };
  
  export const getData = () => {
    return data;
  };
  