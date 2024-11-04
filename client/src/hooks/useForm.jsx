import { useState } from 'react'

function useForm(ModelObject) {
  const [values, setValues] = useState(ModelObject);
  const [errors, setErrors] = useState();


const handleInputChange=e=>{
    const {name,value}=e.target
    setValues({...values,[name]:value});

}

  return (
   setValues,
   values,
   setErrors,
    errors
)
}

export default useForm
