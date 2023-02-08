import React from 'react';

export default class NetflixRegisterComponent extends React.Component
{
  title = 'Ready to watch? Enter your email to create or restart your membership.'
  render(){
    return(
        <>
        <div>
            <div>
                <p className='text-center'>{this.title}</p>
                <div className='input-group input-group-lg'>
                    <input type="email" className='form-control' placeholder='your email address'/>
                    <button className='btn btn-danger'>
                        Get Started
                     <span className='bi bi-chevron-right'></span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
  }
}