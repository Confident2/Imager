import React, { Component } from 'react'

export class Search extends Component  {
  state = {term: ''}

  
   onInputChange(event){
    event.preventDefault();
    this.props.onSubmit(this.state.term);
   }
  


  

  

  render(){
    const {props} = this.props;

    return (
      <div className='grow'>
        <form onSubmit={this.onInputChange} className="relative rounded-lg ml-2  ">
          <input
            type="search"
            name="search"
            placeholder="Travel to the photo world"
            className="py-2 px-2 w-full  border-none  outline-none  h-8 rounded-3xl text-base  pl-10 text-black bg-gray-100"
   
            
          />
          <button
            type="submit"
            className="absolute left-0 top-0 h-10 w-12 text-black p-0 mt-0 mb-0.5 ml-0.5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-6 mb-2 stroke-slate-500 "
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

export default Search