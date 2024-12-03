 import './App.css';
 import { useForm } from "react-hook-form";

function App() {

  const { 
    register,
     handleSubmit, 
     formState: { errors,isSubmitting },
       } = useForm();

async function onSubmit(data){
//API Call simulation >> delay for 5 seconds after clicking submit button
  await new Promise((resolve)=>setTimeout(resolve, 5000));
  console.log("submitting the form", data);
}


  return (

    <div className='App'> 
    <form onSubmit={handleSubmit(onSubmit)}>



<div>
<label>First Name: </label>
<input   
{...register(`firstName`,{ required:  {value: true, message:`Required Field`},
   minLength: {value: 3, message:`Add atleast 3 letters`},maxLength: 20 })}/>
{errors.firstName && <p>{errors.firstName.message}</p>}
</div>
<br/>

<div>
<label>Middle Name: </label>
<input {...register(`middle Name`,{pattern:/^[A-Za-z]+$/i })}/>
</div>
<br/>

<div>
<label>Last Name: </label>
<input {...register(`lastName`,{pattern: {value:/^[A-Za-z]+$/i,message:"Last Name is not as per the rules"}} )}/>
{errors.lastName && <p>{errors.lastName.message}</p>}
</div>
<br/>
<input type='submit' disabled={isSubmitting} 
  value={isSubmitting ? "Submitting" : "Submit"}/>


    </form>
    </div>
   )
}

export default App;
