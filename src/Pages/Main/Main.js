import React,{useState} from 'react';
import { Navigate } from 'react-router-dom';
import './Main.css';
export function Main(){
    let [disease,goToDisease]=useState(false);
    let [catalog,goToCatalog]=useState(false);
    if(catalog){
        return <Navigate to="/DiseaseCatalog" replace={true}/>;
    }
    if(disease){
        return <Navigate to="/DiseaseDetector" replace={true}/>;
    }
    return (
        <div id="Main">
            <div id="websiteStatement">
            </div>
            <h3 id="statementText">
                    Detect Up To 41 Diseases From The Comfort Of Your Home
                </h3>
            <div id="predict">
            <h1 id='webTitle'>Disease Detection From Home</h1>
            <button className="diagnosButton" onClick={()=>{goToDisease(true)}}>Find Out Your Potential Condition</button>
            </div>
            <div id="diseaseCatalog">
                <h1 id="blockTitle">The Catalog Of Diseases You Can Detect</h1>
                <button className="diagnosButton"onClick={()=>{goToCatalog(true)}}>Go To Disease Catalog</button>
            </div>
        </div>
    )
}