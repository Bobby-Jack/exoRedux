import './formcompo.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../app/features/usersSlice';
import { useState } from 'react';

function Formcompo() {
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState(1);
  
  function addNewUser () {
    if (firstName && lastName && age) {
      const f = firstName;
      const l = lastName;
      const a = age;
      let result = {firstName: f, lastName: l, age: a}
      dispatch(addUser(result))
      setfirstName(''); setlastName(''); setage(1);
    }else{
      alert('Entrez les valeurs dans le form!')
    }
    
  }

  return(
    <div className="Formcompo">
      <input type="text" onChange={(e)=>setfirstName(e.target.value.toString())} placeholder='your first name?' value={firstName} />
      <input type="text" onChange={(e)=>setlastName(e.target.value.toString())} placeholder='your first name?' value={lastName} />
      <input type="number" min={1} value={age} onChange={(e)=>setage(parseInt(e.target.value))} />
      <button onClick={addNewUser}>add user</button>
    </div>
  )

}

export default Formcompo
