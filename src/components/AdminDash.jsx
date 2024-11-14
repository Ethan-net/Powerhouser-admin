import React, { useEffect, useState } from 'react'
import Login from './Login';
import '../App.css'
import Logo from './logo';
import prof from '../assets/icon/admin.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import progress from '../assets/images/progress.svg'
import wallet from '../assets/images/wallet.svg'
import settings from '../assets/images/settings.svg'
import dashb from '../assets/images/dashb.svg'
import { Progress } from "flowbite-react";



export default function AdminDash() {


    const [data, SetUserData] = useState ([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [login, SetLogin] = useState({
        username: "",
        password: "",
    });
    
    const [logged, SetLogged] = useState(false)
    const [signinPage, SetsigninPaage] = useState (true)
    const handleSubmit = (e)=>{
        e.preventDefault()

       const correctUsername = 'admin';
       const correctPassword = 'itskills';

       if(login.username === correctUsername && login.password === correctPassword){
        SetLogged(!logged);
        SetsigninPaage(!signinPage)
       }
       else{
        alert("wrong login credentials")
       }
    }

    

    
    useEffect(()=>{
        fetch("https://powerhouse-backend.onrender.com/api/inspections/getinspection")
        .then((response) => response.json())
        .then((myData) => SetUserData(myData));
        
    },[])

    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filteredResults = data.filter((userInfo) => 
          userInfo.firstName?.toLowerCase().includes(lowercasedSearchTerm) ||
          userInfo.id?.toString().includes(lowercasedSearchTerm) ||
          userInfo.email?.toLowerCase().includes(lowercasedSearchTerm) ||
          userInfo.state?.toLowerCase().includes(lowercasedSearchTerm)
        );
        setFilteredData(filteredResults);
      }, [data, searchTerm]);

  return (
    <section className='' >
        
       

        { signinPage && <Login login={login} SetLogin={SetLogin} handleSubmit={handleSubmit}/>}
        {logged && 
        <div >
            
        <div className='user-card ml-64 relative'>
        <div className='fixed top-0 left-0 w-60 h-[100vh]  border-slate-500 border-[0.5px]'>
           <Logo/>
           <hr /> 
           
            {/* <button className='ml-5 text-white bg-red-500 text-xs p-1 rounded-sm'>logout-{'>'}</button> */}
            <div className='ml-10 '>
            <div className='my-10'>
                <button className='leftButt p-1 text-sm'><img className='inline' src={dashb} alt="" />Dashboard </button>
            </div>
            <div className='my-10'>
                <button className='leftButt p-1 text-sm'><img className='inline' src={progress} alt="" />Installation Progress </button>
            </div>
            <div className='my-10'>
                <button className='p-1 leftButt text-sm ease-in'><img className='inline' src={wallet} alt="" />Payment Record </button>
            </div>
            </div>
            <div className='flex px-5 mt-80'>
            <img src={prof} alt="" />
            <p>Admin</p>
           </div>
           <div className='my-10'>
                <button className='p-1 leftButt text-sm ease-in'><img className='inline' src={settings} alt="" />Settings </button>
            </div>
            
        </div>   
        
        {data.slice(-2).map((users)=>(
            <ul className=' cardnth text-xs my-10 flex   shadow-md w-[38vw] rounded-lg showcard relative' key={users.name}>
                
                <li className=' flex items-center gap-8'>
                <h1 className='absolute top-2 -right-2 bg-slate-300 p-2 rounded-lg text-red-500'>Recent Installation Request</h1>
                    <div>
                        <img className='w-48' src={prof} alt="" />
                    </div>
                    <div>
                    <h1 className='font-bold text-slate-700 text-2xl'>{users.firstName} {users.lastName}</h1>
                    <h1>email: {users.email}</h1>
                    <h1>country: {users.country}</h1>
                    <h1>state: {users.state}</h1>
                    <h1>House Address: {users.address}</h1>
                    <h1>Zipcode: {users.zipNo}</h1>
                    <h1>Submitted on: {users.createdAt}</h1>

                  </div>
                    <div className='progBar' style={{ width: 100, height: 100 }}>
                    <CircularProgressbar value={users.progress} text={users.progress} />
                    <p className = 'text-' >Readiness</p>       
                    </div>
                    
                    

                </li>
                
            </ul>
        ))}
       
        </div>
        <ul className='w-[80%] ml-64 '>
                    <input type="text" placeholder='search  customer with name,id, email, etc' className='p-3 outline-none border-slate-400 border-[0.5px] rounded-lg mb-5 w-72 '
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                    {filteredData.map((userInfo)=>( 
                    <li className='userData text-sm border-[0.5px] ' key={userInfo.id}>
                        <img className='p-4' src={prof} alt="" />
                        <h1 className='p-4'>{userInfo.firstName}</h1>
                        <h1 className='p-4'>{userInfo.lastName}</h1>
                        <h1 className='p-4'>{userInfo.email}</h1>
                        <h1 className='p-4'>{userInfo.address}</h1>
                        <div>
                        <h1>
                            Installation Progress
                        </h1>
                        <progress value={userInfo.progress} max={100} />
                        </div>
                        
                    
                    </li>
                    ))}
                </ul>
        </div>}
        
    </section>
  )
}
