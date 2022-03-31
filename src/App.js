import React,{Component} from 'react';
// import HeaderContainer from './Container/Header';
import './App.css';
// import Main from './Component/Main'



class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data :[
        {
          id: "1",
          key: "1",
          title: "Title1",
          text: "Text1.",
          img: "../image/test.jpg"
        },
        {
          id: "2",
          key: "2",
          title: "Title2",
          text: "Text2.",
          img: "../image/test.jpg"
        },
        {
          id: "3",
          key: "3",
          title: "Title3",
          text: "Text3.",
          img: "../image/test.jpg"
        },
        {
          id: "4",
          key: "4",
          title: "Title4",
          text: "Text4",
          img:"../image/test.jpg"
        }
      ]
      
    
    }
  }
  render(){
  //  const handleToggle =() => {
  //   this.setState({
  //       data:{

  //       }
  //   })  

  //  }

    return (
      <div className="App container">
   
        
     {/* <HeaderContainer></HeaderContainer>
      <Main></Main> */}
      <div className="img">
              
              <div onClick={function(){
                console.log("클릭")
              }.bind(this)}>{this.state.data[0].title}</div>
              <div>{this.state.data[1].title}</div>
              <div>{this.state.data[2].title}</div>
              <div>{this.state.data[3].title}</div>

           
              </div>
     
      </div>
     
        
     
    
    );
  }

}

export default App;
