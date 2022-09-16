import React, { useRef, useState } from 'react'
import Weatherdata from './Weatherdata'

export default function Inputpostal() {
    const pincode = useRef()
    const [name, setname] = useState()
    const [valid, setvalid] = useState(false)
    const searchHandler = (e) => {
        e.preventDefault()
        if (pincode.current.value.trim() !== 0) {
            setname(pincode.current.value)
            setvalid(true)
            pincode.current.value = ""
        }
    }
    return (
        <div>
            <h2 className='mb-3'>Weather App</h2>
            <form onSubmit={searchHandler}>
                <label htmlFor=""></label>
                <input type="text" ref={pincode} />
                <input type="submit" value="Search" />
            </form>
            {valid && <Weatherdata search={name} />}
        </div>
    )
}
