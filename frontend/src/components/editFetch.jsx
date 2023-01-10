import React from "react";
import Edit from "./edit";
import { useLocation } from "react-router-dom";



function EditFetch(){
    const { state: { id } = {} } = useLocation();


return <Edit id={id}/>
}

export default EditFetch