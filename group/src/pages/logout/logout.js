import React from 'react'
// import
class Logout extends React.Component{
    render(){
        return(
            <div>
                
                <button onClick={()=>{
                    this.props.history.push('/login')
                }}>
                 登出
                </button>          
            </div>
        )
    }
}
export default Logout