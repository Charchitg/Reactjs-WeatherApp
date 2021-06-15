import React , { useState , useEffect } from 'react';
import './main.css';


function AppContainer() {

const [ location , setlocation ] = useState(null);
const [ search , setSearch ] = useState("Indore");
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}    

useEffect(() => {
    const fetchApi  = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=89c7f980abfec8b2cf2e4d03ea3bdc50`
    const Data = await fetch(url);
    const jsonData = await Data.json();
    //console.log(Data);
    //console.log(jsonData);
    setlocation(jsonData.main);
    }
    fetchApi();
 } , [search] ); 

const HandleChange = (e) => {
    setSearch(e.target.value);
}

    return (
        <>
        <div className="box">
            <div className="inputData">
            <input 
                type="search"
                value={search}
                className="inputField"
                onChange={HandleChange}
            />
            </div>
     {!location ? (
         <p className="errorMsg">No Data Found</p>
     ) : (
        <div className="info">
            <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
                {location.temp}°C
            </h1>
            <h1 className="tempmin_max"> Min : {location.temp_min}°C | Max : {location.temp_max}°C</h1>
        </div>
     )}
        
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        </>
    )
}

export default AppContainer
