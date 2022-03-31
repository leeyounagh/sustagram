import { createStore } from 'redux';


let initState ={
    
    storyContents:[
        { id:1 , name:'story1',story : false,storypic:<img alt='picture1' src='../image/test'></img> },
        {id:2,name:'story2',story : false,storypic:<img alt='picture1' src='../image/test'></img>},
        {id:3,name:'story3',story : false,storypic:<img alt='picture1' src='../image/test'></img>}
    ]
}

function reducer(state=initState,action){
       if(action.type==='story'){
        return {...state,story:true,storypic:action.picture}
       } 
       return state
}

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())