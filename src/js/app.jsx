/*Place this HTML inside of the div element with the className attribute set to container in src/js/app.jsx. Use the Bootstrap horizontal form layout to define the visible elements of the page:

An input element for the user to enter the mortgage loan balance in US dollars with a name attribute of balance and type number.
An input element for the user to enter the annual percentage rate of charge (APR) with a name attribute of rate, a type attribute of number and, a step attribute of 0.01 to allow for decimal rate percentages.
A select element for the user to select a loan term with the name attribute of term, populated with option elements that display the available terms. In this case, either 15 or 30. The value attribute inside of each option element should represent the corresponding terms (15 or 30).
A button element with a name attribute of submit for the user to calculate their monthly mortgage payment based on the above inputs.
A div element to display the mortgage payment with a name attribute of output.  (Note: Make sure you also give the element an id attribute of output. Otherwise, your tests will not pass!)
You will need to add additional attributes to these HTML elements as we develop the JavaScript portion of the project.*/



import React from 'react'
const homePic =  new URL("C:\Users\rongu\projects\react100-mortgage-calculator\public\img")
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      rate:"",
      term:0,
      mp:"",
      image:""
    };
    this.handleChange=this.handleChange.bind(this);
    this.calcMortPay=this.calcMortPay.bind(this);
  }
  
    handleChange (e) {
      this.setState({[e.target.name]:parseFloat(e.target.value)})
    }
      calcMortPay(){
      let p = this.state.balance;
      let r = (this.state.rate/100) / 12;
      let n = (this.state.term) * 12;
      let m = (p *( r * (Math.pow((1+r), n))) / (Math.pow((1+r), n)-1)).toFixed(2);
      this.setState({mp:`$${m} is your payment.`});
    }
  
    render() {
      return (
        
      <div className="form-box" style={{display : "inline-block"}}>
        <h3>Mortgage Calculator</h3>
            <label className="control-label">
              <input
                  type="number"
                  name="balance"
                  placeholder="Loan Balance"
                  value={this.state.balance}
                  onChange={this.handleChange}
                  />
            </label>
              <label className="control-label">
                <input
                  type="number"
                  name="rate"
                  step="0.01"
                  placeholder="Rate"
                  value={this.state.rate}
                  onChange={this.handleChange}
                    />
              </label>
                <label className="control-label">
                   <select
                   type="input"
                  name="term"
                  onChange={this.handleChange}>
                  <option>Choose your Term</option>
                  <option value="15">15 years</option>
                  <option value="30">30 years</option>
                    </select>
              </label>
              <div className="text-center">
              <button
                placement="centered"
                className="btn btn-primary"
                type="button"
                name="submit"
                onClick={this.calcMortPay}
                >Calculate Payment</button>
                </div>
                <div 
                textAlign="center"
                className="output"
                id="output"
                >
              {this.state.mp}
                  </div>
                  </div>
                  );
            }
        }
    
  


  
