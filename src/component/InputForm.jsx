import React, { Component } from 'react'

export class InputForm extends Component  {

  state = {term: ''}

  onInputChange(event){
    console.log(event.target.value)
    
   }
  _onFormSubmit = event => {

    event.preventDefault();
    this.props.onSubmit(this.state.term);



  };
  get onFormSubmit() {
    return this._onFormSubmit;
  }
  set onFormSubmit(value) {
    this._onFormSubmit = value;
  }

  render(){
    const {props} = this.props;

    return (
      <div>
          <form onSubmit={this.onFormSubmit} className="relative rounded-md  ">
          <input
            type="search"
            name="search"
            placeholder="Travel to the photo world"
            className="py-2 px-2 w-full  border-none  outline-none h-14 rounded-md text-base  pl-20 text-black bg-gray-100"
            value={this.state.term}
            onChange={e => this.setState({term: e.target.value.toLowerCase()})}
           
          />
          <button
            type="submit"
            className="absolute left-0 top-0 h-14 w-12 text-black p-0 mt-0 mb-0  ml-1 flex items-center justify-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-6  stroke-slate-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>

          
        </form>
        
      </div>
    )
  }
  
}

export default InputForm