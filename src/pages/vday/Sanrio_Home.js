import { useState, useRef, useEffect  } from "react";

import Melody_gif from './../../Photos/melody.gif'

import mel_heart from './../../Photos/mel_heart.gif'
import mel_kiss from './../../Photos/melodykiss.gif'

import pen from './../../Photos/pen.gif'
import pom_two from './../../Photos/pom_two.gif'
import Typing from "./typing";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

import sbackground from './../../Photos/sanrio_background.webp'


function Sanrio_Home(){


    return (
        <div className='  w-full h-full flex flex-col items-center text-center font-extrabold'  style={{ backgroundImage: `url(${sbackground})` }}>

                <div className="text-6xl h-2/5 pt-24">
                    Welcome to the Homedog Quiz of Love!!
                </div>
                <div className="text-6xl bg-[#fecdd3] rounded-full w-1/5 hover:opacity-70">
                <Link className='w-full flex justify-center hover:opacity-70' to = '/HelloKitty'>Start</Link>
                </div>

        </div>
    )

}

export default Sanrio_Home;