import { Header } from '@/component/header';
import React, { Component } from 'react'


 class Signup extends Component {
  state = { password: '' }
  render() {

    return (
      <div>
        <Header />
      <div
        className=" h-96 bg-cover bg-center flex justify-center items-center saturate-150 contrast-250   bg-[url('/images/confiHeader.jpg')] " style={{'height':'40rem'}} >
      

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Sign Up
          </h1>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
            placeholder="Email"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Sign Up
          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default Signup;