import React,{useState,useEffect} from 'react'
import Axios from'axios'
import Loading from './Details/Loading'
import Githubusers from './Details/Employeelist'
const UseEffect = () => {
  const[users,setUsers]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    Axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
    .then((response)=>{
      console.log(response.data);
      setUsers(response.data)
      setLoading(false)
    })
    .catch(()=>{})
  },[])
  if (loading) {
    return <Loading />
}
  return (
    <>
     <Githubusers users={users}/>
    </>
  )
}

export default UseEffect