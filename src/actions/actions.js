import axios from "axios";

//table->Reducer->ACTIONS->SERVER->DATABASE

/*--------------------------------- ALL EMPLOYES------------------------------------------ */
//1-CREATE ACTION 
//2- CONNECT TO SERVER [DISPATCH]
//3- CATCH 2 RESPONSE [RES,DATA]
//4.PASS THE DISPATCH THE DATA TO REDUCER
//5.REDUCER MANAGES THE STATE 
//6. REDUCER PASS THE DATA TO TABLE


export const getEmployees = ()=>{
return(dispatch) =>{
    return axios.get("http://localhost:8080/employees").then((res)=>{
        console.log(res.data);
         //it will call some other func
      dispatch(fun_one(res.data));
    },(err )=>{
        console.log(err);
    });
}

};

export const fun_one =(records)=>{
    //Reducer connection
return {type:"ALL_EMPLOYEES",value:records}
}


/*--------------------------------- ADD EMPLOYEE------------------------------------------ */
//Reciving employye from UI
export const udateEmployee=(employee) =>{
    return(dispatch)=>{
        return axios.put("http://localhost:8080/updateemployee",employee).then((res)=>{
            //Response contains SUCESS OR FAILURE
            res.data.newemployee=employee;
            dispatch(fun_two(res));

        },(err )=>{
            console.log(err)
        })
    }

};
export const fun_two =(result ) =>{
    return{type:"UPDATE_EMPLOYEE",value:result}
};



/*--------------------------------- UPDATE EMPLOYES------------------------------------------ */

export const addEmployee=(employee) =>{
    return(dispatch)=>{
        return axios.post("http://localhost:8080/newemployee",employee).then((res)=>{
            //Response contains SUCESS OR FAILURE
            res.data.newemployee=employee;
            dispatch(fun_three(res));

        },(err )=>{
            console.log(err)
        })
    }

};
export const fun_three =(result ) =>{
    return{type:"ADD_EMPLOYEE",value:result}
};

/*--------------------------------- Delete EMPLOYES------------------------------------------ */

export const deleteEmployee=(employee) =>{
    return(dispatch)=>{
        return axios.delete("http://localhost:8080/deleteemployee",{data:employee}).then((res)=>{
            //Response contains SUCESS OR FAILURE
            console.log(res.data.newemployee);
            res.data.newemployee=employee;
            dispatch(fun_four(res));

        },(err)=>{
            console.log(err)
        })
    }

};
export const fun_four =(result) =>{
    return{type:"DELETE_EMPLOYEE",value:result}
};

