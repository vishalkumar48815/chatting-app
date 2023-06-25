import React from 'react'
import imageDp from './Images/Rahul_Dp.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function () {
    const [user, setUser] = useState([]);
    const fetchData = async () => {
        return fetch('http://127.0.0.1:8000/get-all-users')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setUser(data)
            })
    }
    

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div className="card m-auto" style={{ width: "40%"}}>

            <div className="card-body">

                <section className='pt-3' id='bodySection' style={{ height: '100vh' }}>
                    <div>
                        {user.map((item) => {
                            if (item.id != "1") {
                                return <Link to={"/chat/" + item.id} className='text-decoration-none'>
                                <div className='row usersRow my-1' style={{ background: '#f1f1f1', padding: '5px 5px' }}>
                                    <div style={{ width: '60px', borderRadius: '100%', alignSelf: 'center' }}><img style={{ width: '57px', borderRadius: '100%' }} src={imageDp} alt="" className="img-responsive" /></div>
                                    <div className='' style={{ width: 'fit-content', textAlign: 'left', margin: "0px 0px 0px 8px" }}>
                                        {item.name}
                                        <div className='' style={{ color: '#9f8b8b' }}>
                                            last message
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                
                            }
                        })
                        }

                    </div>
                </section>
            </div >

        </div>

    )
}
