import { useState,useRef, useEffect} from "react"

 function InpageNavigation({teams,children}){
   const [teamIndex,setteamIndex]=useState(0);
   let tabLineRef=useRef();
   let Intialbtn=useRef();
   function handleChange(btn,i){
       let {offsetWidth,offsetLeft}=btn;
       tabLineRef.current.style.width = offsetWidth + "px";
       tabLineRef.current.style.left = offsetLeft + "px";
       setteamIndex(i);
   }
   useEffect(()=>{
      handleChange(Intialbtn.current,0)
   },[])
    return(
        <>
         {
            teams.map((team,i)=>(
               <button 
                ref={i==0 ? Intialbtn:null}
                className={"bg-slate-200 mr-1 px-10 " + (teamIndex==i ? "bg-gray-300":"bg-gray-200")} key={i} onClick={(e)=>handleChange(e.target,i)}>{team}</button>
            ))
         }
         
         <hr
                ref={tabLineRef}
                className="border-black absolute border-2 duration-300"
            />
         {  
           children[teamIndex]
         }
         
        </>
    )
 }
 export default InpageNavigation