import React from 'react'

const ModeBtn = ({switchColor,modename}) => {
    // const switchColor=()=>{
    //     setColor(color==='light' ? 'dark':'light')
    // }
  return (
    <div>
        <button className='modebtn' onClick={switchColor}>{modename}</button>
    </div>
  )
}

export default ModeBtn