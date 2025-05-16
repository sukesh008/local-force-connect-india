
import { NavLink } from "react-router-dom"
import "./SwitchTabsButton.css"
import { useState } from "react"


const TabButton=(props)=>{

    const{
        tabs=[]
    }=props

      const [currentTab,setCurrentTab]=useState(tabs[0])


    const handleActive=(e)=>{
            setCurrentTab(e.target.innerText)
    }

    
    return  <div className="tab-button-container">
                 {
                    tabs.map((data,index)=>{
                        return <div key={index} className={`tab-button ${currentTab===data ? "active" : "non-active"}`} onClick={handleActive}>{data}</div>
                    })
                 }
            </div>
  
}

export default TabButton