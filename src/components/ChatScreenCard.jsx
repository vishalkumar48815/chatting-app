import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



export const API_URL = `http://127.0.0.1:8000/`
export default function ChatScreenCard() {
  let { id } = useParams()

  const [userChats, setUserChats] = useState([]);
  const [message, setMessage] = useState("")

  const fetchData = async () => {
    try {
      let data = await axios.get(`${API_URL}get-conversation?sender=1&receiver=${id}`)
      setUserChats(data?.data)
    } catch (error) {
      
    }
 
  }



  useEffect(() => {
    fetchData();
  }, [id]);



  const handleSubmit = async () => {
    try {
      let res =  await axios.post(`${API_URL}save-message`, {
        message: message,
        sender: 1,
        receiver: id,
      })
    } catch (error) {
      
    }
   

  }

  return (
    <div className="card m-auto" style={{ width: "40%" }}>

      <div className="card-body">
        <section>
          <header>
            <div className='row'>
              <div className='col' style={{ width: 'fit-content', textAlign: 'left', margin: '4px 8px' }}>{userChats?.receiver_name}</div>
            </div>
          </header>

          <section className='pt-3' id='bodySection' style={{ background: '#f1f1f1', height: '100vh' }}>
            {userChats?.message?.map((elem) => {
              let userRow = <div>
                <div className='row userRow my-1' style={{ margin: '4px 8px', justifyContent: 'right', width: '50%', float: 'right' }}>
                  <div className='' style={{ width: 'fit-content', background: 'skyblue', borderRadius: '1px 7px 7px 7px' }}>
                    {elem.message}
                  </div>
                </div>
              </div>

              let guestRow = <div>
                <div className='row guestRow my-1' style={{ margin: '4px 8px', justifyContent: 'left', width: '50%' }}>
                  <div className='' style={{ width: 'fit-content', background: 'white', borderRadius: '7px 1px 7px 7px' }}>
                    {elem.message}
                  </div>
                </div>
              </div>
              return elem.sender === Number(1) ? userRow : guestRow

            })}
          </section>

          <footer style={{ width: '100%', position: 'absolute', bottom: '0' }}>
            <div className='row m-auto' style={{ width: '98%' }}>
              <div className='col'>
                <input type="text" className="form-control" id="messageBox" onChange={(event) => { setMessage(event.target.value) }} placeholder="Type Here" />
              </div>
            <form>
            </form>
              <div className=' text-center' style={{ width: 'fit-content' }} >
                <button onClick={handleSubmit} style={{ border: '1px solid grey' }} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg></button>
              </div>
            </div>
          </footer>

        </section>
      </div>
    </div>
  )
}

