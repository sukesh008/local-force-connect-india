
import { NavLink } from "react-router-dom"
import "./SwitchTabsButton.css"
import { useState } from "react"


const TabButton=({tabs,setCurrentTab,currentTab,className})=>{


    const handleActive=(e)=>{
            setCurrentTab(e.target.innerText)
    }

    
    return  <div className="tab-button-container">
                 {
                    tabs.map((data,index)=>{
                        return <div key={index} className={`tab-button ${className} ${currentTab===data ? "active" : "non-active"}`} onClick={handleActive}>{data}</div>
                    })
                 }
            </div>
  
}

export default TabButton