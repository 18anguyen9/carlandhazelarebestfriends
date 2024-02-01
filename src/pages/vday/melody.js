import { useState, useRef, useEffect  } from "react";

import Melody_gif from './../../Photos/melody.gif'

import mel_heart from './../../Photos/mel_heart.gif'
import mel_kiss from './../../Photos/melodykiss.gif'

import pen from './../../Photos/pen.gif'
import pom_two from './../../Photos/pom_two.gif'
import Typing from "./typing";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Melody(){
    const [convo, setConvo] = useState('Hi, its Melody! Final Question!!! Would you be my Valentine?');
    const [wrong_count,setwrongCount] = useState(0);
    const [showNext, setshownext] = useState(false);
    const [wrong_position, setwrongPos] = useState('')


    const correct_answer = () => {
        setConvo('AYOS WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO. Thank you for being my Valentines, I love you <3')
        setshownext(true)
      }
    const wrong_answer = () => {
        if(wrong_count == 0){
            setConvo('Are you sure?')
            setwrongPos('absolute left-[-400px]')
        }else if(wrong_count===1){
            setConvo('Excuse me?')
            setwrongPos('absolute left-[-400px] top-[-300px]')
        }else if(wrong_count===2){
            setConvo('Oh..')
            setwrongPos('absolute right-[-400px] top-[-300px]')
        }else if(wrong_count===3){
            setConvo('Stop goofing.')
            setwrongPos('absolute left-[-400px] bottom-[-100px]')
        }else if(wrong_count===4){
            setConvo('Oh Where did it go??? Hmmm....')
            setwrongPos('absolute left-[-400px] bottom-[-100px] hidden')
        }
        setwrongCount(wrong_count+1)
      }



    return (
        <div className='bg-[#ec4899]  w-full h-full flex justify-center items-center flex-col font-extrabold'>

                    {showNext ?   <img className='w-[170px] h-[170px]  rounded-full absolute top-64 left-64' src={mel_heart} />:null}
                  {showNext ?       <img className='w-[170px] h-[170px]  rounded-full absolute top-48' src={mel_kiss} />:null}
                  {showNext ?       <img className='w-[170px] h-[170px]  rounded-full absolute top-64 right-64' src={pen} />:null}
                  {showNext ?       <img className='w-[170px] h-[170px]  rounded-full absolute left-48' src={pom_two} />:null}
                  {showNext ?      <img className='w-[170px] h-[170px]  rounded-full absolute right-48' src={Melody_gif} />:null}

                
                    

           <div className="">
                {/* avatar and dialouge*/}
                <div className="w-[170px] left-0 relative">
                    <div className=" w-2 h-2 rounded-full bg-HKWHITE absolute right-[20px] top-[20px] "></div>
                    <div className=" w-3 h-3 rounded-full bg-HKWHITE absolute right-0 top-0 "></div>
                    <div className=" w-4 h-4 rounded-full bg-HKWHITE absolute right-[-20px] top-[-20px] "></div>

                    <div className=" w-[270px] h-[130px] rounded-lg bg-HKWHITE absolute right-[-290px] top-[-150px]">
                        <div className="p-2 text-xl"><Typing speed={90} msg={convo} /></div>
                        
                    </div>
                    
                    <img className='w-[170px] h-[170px]  rounded-full ' src={Melody_gif} />
                    
                </div>
                
                {/* Below is the answer box*/}
                <div className="bg-[#fbcfe8] w-[800px] h-[400px] rounded-lg place-content-center text-2xl">

                    <div className="h-full flex justify-center rounded-lg p-3 relative">
                        <div className={"border-2 w-1/2 m-3 rounded-lg bg-HKWHITE flex justify-center items-center hover:opacity-70 " + wrong_position} onClick={wrong_answer}>No</div>
                        <div className="border-2 w-1/2 m-3 rounded-lg bg-HKWHITE flex justify-center items-center hover:opacity-70" onClick={correct_answer}>Yes</div>
                    </div>
        
                </div>

                {/* BELOW IS NEXT PAGE BUTTONS*/}
               
            
                
           </div>
            

        </div>
    )

}

export default Melody;