import React, { useEffect, useState } from 'react'
import './Weatherdata.css'

export default function Weatherdata(props) {
    const [location, setlocation] = useState([])
    const [todayMax, settodayMax] = useState([])
    const [todayMin, settodayMin] = useState([])
    const postal = props.search
    const getLocation = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=8Dncos7woklMpJUc19IL6RniDkGAYodK&q=${postal}`)
        const data = await response.json()
        setlocation(data[0].Key)
    }
    useEffect(() => {
        getLocation()
    }, [postal])
    const getWeather = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${location}?apikey=8Dncos7woklMpJUc19IL6RniDkGAYodK`)
        const data1 = await response.json()
        console.log(data1)
        settodayMax(data1.DailyForecasts[0].Temperature.Maximum)
        settodayMin(data1.DailyForecasts[0].Temperature.Minimum)
    }
    useEffect(() => {
        if (location.length > 0) { getWeather() }
    }, [location])
    return (
        <div className='card'>
            <h1>{postal}</h1>
            <h3>Maximum Temperatur: {todayMax.Value}<span>{todayMax.Unit}</span></h3>
            <h3>Minimum Temperatur: {todayMin.Value}<span>{todayMin.Unit}</span></h3>
        </div>
    )
}
