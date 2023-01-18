import { useState } from "react";




function Try({ addEntryToPhoneBook }) {
  const [contacts, setContacts] = useState([]);
  const [Firstname,setFirstname] =useState();
  const [Lastname,setLastname] =useState();
  const [Phonename,setPhonename] =useState();

  const handleSubmit=(e)=>{
      e.preventDefault();
      setFirstname(Firstname)
      setLastname(Lastname)
      setLastname(Phonename)
      setContacts([...contacts])

  }
  return (
    <div>
    <form onSubmit={handleSubmit} >
      <label>First name:</label>
      <br />
      <input 
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={Firstname}
        onChange={(e)=>setFirstname(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={Lastname}
        onChange={(e)=>setLastname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        className='userPhone' 
        name='userPhone' 
        type='text'
         value={Phonename}
        onChange={(e)=>setPhonename(e.target.value)}
      />
      <br/>
      <button
        className='submitButton'
        value='Add User' 
        type="submit"
      >
        Add
      </button>
    </form>
    <main>
        {contacts}
    </main>
    </div>
  )
}

export default Try;