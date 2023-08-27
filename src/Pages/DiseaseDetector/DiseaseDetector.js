import React,{useState} from 'react';
import { Symptoms,Diseases} from '../../Assets/Symptoms';
import './DiseaseDetector.css';
export function DiseaseDetector(){
    let numbOfSymptoms=132;
    let [symptoms,addSymptoms]=useState([]);
    let [result,setResult]=useState(false);
    async function handleSubmit(e){
        e.preventDefault();
        let objec={data:symptoms};
        await fetch('/diseaseDetector',{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(objec)}).then(
            response=>response.json()
        ).then(a=>{
            setResult(a.result)
        }

        ).catch(e=>console.log(e));

    }

    if (symptoms.length!==numbOfSymptoms){
        return (
            <div id="questionairePage">
                <h1 id="questionH1"> Do You Have This Symptom? <br/> <h2 id="questionh2">{Symptoms[symptoms.length]}</h2></h1>
                <button className='diseaseButton Yes' onClick={()=>{addSymptoms(a=>[...a,1])}}>Yes</button>
                <button className='diseaseButton No'  onClick={()=>{addSymptoms(a=>[...a,0])}}>No</button>
                <h4 id="yourProgress">Your Progress</h4>
                <div id="progress">
                <div id='boxes'>
                    {
                        Symptoms.map((a,h)=><div key={h} className='box'></div>)
                    }
                </div>
                <div id="progressBar" style={{transform:`scaleX(${symptoms.length/numbOfSymptoms})`}}></div></div>
            </div>
        )
    }
    if(result!==false){
        let informationToGive=undefined;
        Diseases.forEach(a=>{
            if(a[0].toLowerCase()===result.toLowerCase()){
                informationToGive=a;
            }
        });
        return (
            <div>
                <h1 id="resultTitle"><span id="resultTitleHead">The Results Are:</span> <br/><br/> {informationToGive[0]}</h1>
                <h3 id="caution">Caution:</h3>
                <h5 id="warning">The Results Are Not To Be Taken As Absolute Fact And Should Only Be Used To Help Identify A Potential Problem. Consult A Doctor If You Feel The Need For Further Action.</h5>
            </div>
        )
    }
    return(
        <div id='diseaseDetector'>
            <h1 id="getPrognosis">Get Your Prognosis</h1>
            <form onSubmit={handleSubmit}>
            <button className="submitInput" type="submit">Submit</button>
            </form>
        </div>
    );
}