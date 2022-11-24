import React,{useState} from 'react'


const Githubusers = ({users}) => {
  const [search,setSearch]=useState("")

  return (
    <>
     <h1 align='center'className='h1 mt-5'>LIST OF EMPLOYEES</h1>
      <div className="container-fluid mt-5">
      <form className='input'>
          <input type='text'value={search} className='form-control-lg'  onChange={e=>setSearch(e.target.value)} placeholder="Search Employee..."/>
        </form>
        <div className="row text-center">
          {
            users.filter(user=>user.firstName.toLowerCase().includes(search.toLowerCase())).map((employee)=>{
              const {id,firstName,email,imageUrl,age,dob,salary,contactNumber} =employee;
              return(
                <div className="col-12 col-md-4 mt-5" key={id}>
                  <div className="card p-2">
                    <div className='d-flex align-items-center'>
                     <div className='image'>
                     <img src={ imageUrl } className="rounded" width="155"  alt='github user'/> 
                       </div>

                       <div className='ml-5 w-100'>
                       <h3 className="mb-0  textLeft">{firstName}</h3>
                       <span className="text-left">{email }</span><br/>
                       <span className="text-left"> Contact : {contactNumber }</span>
                       <div className="p-2 mt-2 bg-primary d-md-flex justify-content-between rounded text-white">
                       <div className="d-flex flex-column">
                             <span>Age</span>
                             <span>{age}</span>
                           </div>
                           <div className='d-flex flex-column'>
                             <span>DOB</span>
                             <span>{dob}</span>
                           </div>
                           <div className='d-flex flex-column'>
                             <span>Salary</span>
                             <span>{salary}LPA</span>
                           </div>

                         </div>
                         </div>
                    </div>
                    </div>
                    </div>
              )
            })
          }
          </div>
          </div>
    </>
  )
}

export default Githubusers