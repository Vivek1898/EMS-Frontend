const initialState ={
    records:[]
};
//Create Reducer
//callback func is reducer
const reducer =(state=initialState,action )=>{
//JSON OBJ CCONTAIN ONE KEY {TYPE}
//maintain immutablity
switch(action.type){
    case "ALL_EMPLOYEES":
            return{
                ...state,
                records:state.records.concat(action.value)
            }
            break;
            
            case "ADD_EMPLOYEE":
            case "UPDATE_EMPLOYEE":
            case "DELETE_EMPLOYEE":
                return{
                    ...state,
                    status:action.value
                }
            break;   

      }

        return state;
};
//Reducer will give JSON object to component
export default reducer;

