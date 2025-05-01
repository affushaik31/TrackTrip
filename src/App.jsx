import React, { useState } from 'react'
import './App.css'
import {jsPDF} from "jspdf"

function App() {


  const[source,setSource] = useState('')
  const[destination,setDestination] = useState('')
  const[name,setName] = useState('')
  const[age,setAge] = useState('')
  const[date,setDate] = useState('')
  const[mob,setMob] = useState('')
  const[email,setEmail] = useState('')
  const today = new Date().toISOString().split("T")[0];

  const downloadTicket = ()=>{
      if(source==destination){
        alert('Source city and destination city should not be same')
      }
      else if(source=="" || destination==""||name==""||age==""||mob==""||date==""||email==""){
          alert("Can not book ticket with empty details")
      }

      else{
            const ticket = new jsPDF();

           
            ticket.setFontSize(26)
            ticket.setFont("Ticket Booking Confirmation","itallic",600)
            ticket.setTextColor(11, 18, 36)
            ticket.text("Ticket Booking Confirmation",50,20)
            ticket.addImage("./bus.png",10,10,35,35)
            ticket.setFontSize(23)
            ticket.setTextColor(2, 81, 142)
            ticket.setFont("passenger Details","cursive",600)
            ticket.text("Passenger Details",50,40)
            ticket.setFontSize(18)
            ticket.setTextColor(123, 5, 147)
            ticket.text(`Name : ${name}`, 40,60)
            ticket.text(`Age    : ${age}`, 40,70)
            ticket.text(`Mob   : ${mob}`, 40,80)
            ticket.text(`Email : ${email}`, 40,90)
            ticket.text(`From  : ${source}`, 40,100)
            ticket.text(`To      : ${destination}`, 40,110)
            ticket.text(`Date   : ${date}`, 40,120)


            ticket.save("ticket.pdf")
      }
  }


  return (
    <>
        <div className="main">
              <header>
                <img src="./bus.png" width="80" style={{borderRadius:'12px'}}/>
                <h1 style={{color:'rgb(11, 18, 36)', letterSpacing:'9px', textAlign:'center', fontWeight:'800',fontSize:'33px'}}>Track Trip</h1>
              </header>

              <div className='ticket'>
                    <h2 style={{fontSize:'30px', color:'navyblue)',letterSpacing:'7px', flexWrap:'wrap'}}>Book your Ride</h2>

                    <div className='form'>
                    <div style={{width:'100%',display:'flex', columnGap:'8px', flexWrap:'wrap', alignItems:'center', justifyContent:'center',rowGap:'8px'}}>
                      <select value={source} onChange={(event)=>{setSource(event.target.value)}}>
                          <option>Select source city</option>
                          <option value='Proddatur'>Proddatur</option>
                          <option value="Kadapa">Kadapa</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Pune">Pune</option>
                        </select>

                        <select value={destination} onChange={(event)=>{setDestination(event.target.value)}}>
                          <option>Select Destination city</option>
                          <option value="Proddatur">Proddatur</option>
                          <option value="Kadapa">Kadapa</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Pune">Pune</option>
                        </select>
                      </div>

                       

                        <input type='date' value={date} min={today} onChange={(event)=>setDate(event.target.value)}/>
                        <div style={{display:'flex', columnGap:'10px',flexWrap:'wrap', alignItems:'center', justifyContent:'center',rowGap:'8px'}}>

                        <input type='text' placeholder='Enter your name'
                        value={name} onChange={(event)=>{setName(event.target.value)}}
                        />
                        <input type='tel' placeholder='Enter your Age' value={age} onChange={(event)=>{setAge(event.target.value)}}/>
                        </div>

                      
                        <input type='tel' placeholder='Enter your Mobile' maxlength='12' value={mob} onChange={(event)=>{setMob(event.target.value)}}/>
                        <input type='email' placeholder='Enter your email'
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                        />

                    

                        <button onClick={downloadTicket}>Download Ticket</button>
                    </div>
              </div>
        </div>
    </>
  )
}

export default App