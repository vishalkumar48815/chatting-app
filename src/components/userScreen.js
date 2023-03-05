import React from 'react'
import imageDp from './Images/Rahul_Dp.jpg'

export default function
    () {
    return (
        
            <div className="card" style={{width: "40%"}}>

                <div className="card-body">
                    
                        <section className='pt-3' id='bodySection' style={{  height: '100vh' }}>
                            <div>
                                <div className='row usersRow my-1' style={{background: '#f1f1f1',padding:'5px 5px'}}>
                                <div style={{width:'60px',borderRadius:'100%',alignSelf:'center'}}><img style={{width:'57px',borderRadius:'100%'}} src={imageDp} alt="" className="img-responsive"/></div>
                                    <div className='' style={{ width: 'fit-content',textAlign:'left',margin:"0px 0px 0px 8px"}}>
                                        Rahul
                                        <div className='' style={{ color:'#9f8b8b'}}>
                                        last message
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>

                        </section>
                    </div >
                
            </div>
        
    )
}
