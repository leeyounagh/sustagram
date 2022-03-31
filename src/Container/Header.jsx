import { connect } from "react-redux";
import Header from "../Component/Header";
export default connect(
    function(state){
       return {data:state.storyContents}
    },function(dispatch){
        return{
            onClick:function(story,picture){
                dispatch({type:story,picture})
               
            }
        }
    }
)(Header);