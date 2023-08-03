import React, { Component } from 'react'

export default class Login extends Component {
  state={
    username:"",
    password:""
  }
  handleChange= (evt)=>{
    const fields=Object.assign({},this.state);
    fields[evt.target.name]=evt.target.value;
    this.setState({...fields});
  }
  render() {
    return (
      <div className='flex justify-center '>
        <div className='flex flex-col absolute top-[30%] shadow-lg w-[60%] p-5 border-[2px] rounded-lg mobile:w-[90%]'>
          <span className='text-2xl text-center'>Login</span>
            <div className='flex mt-3'>
                <input type="text" className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200" placeholder='username' value={this.state.username} name='username'onChange={this.handleChange}/>
            </div>
            <div className='flex mt-3'>
                <input type="password" className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"   placeholder='password' value={this.state.password} name='password' onChange={this.handleChange} />
            </div>
            <input type="button" value="login" className='btn mt-7 hover:scale-[1.03]' />
        </div>
      </div>
    )
  }
}

