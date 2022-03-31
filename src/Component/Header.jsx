import React, { Component,useState } from 'react'

export default class Header extends Component {
  
  render() {
   
   
    
     const imageClick = ()=>{
            console.log('이미지');
           

           let picture= <img  src='../image/test.jpg' alt='test' width="300px" height="300px"></img>
           return picture
     }
    return (
      <table className='container header-flex ui-set'>

        
          <thead>
            <tr>
            <th><img className='logo-size'alt='logo' src='../image/logo.jpg'></img></th>
            </tr>
          
          </thead>
         <tbody>
           <tr>
          
             
           
         <td className='Story'><img src='../image/story.png' alt='test' className='button-style' 
          onClick={function(e){
            e.preventDefault()
           
            this.props.onClick('story',imageClick());
             
          }.bind(this)}></img></td>
        
       </tr>
          
         </tbody>
        
     
       

      </table>
      
    )
  }
}
