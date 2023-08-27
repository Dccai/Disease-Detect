import React,{useState} from "react";
import { Diseases } from "../../Assets/Symptoms";
import './DiseaseCatalog.css';
export function DiseaseCatalog(){
    let [diseasePage,createPage]=useState(undefined);
    let [search,updateSearch]=useState('');
    function getSearch(){
        if(search===''){
            return 'Waiting For Search Input';
        }
        let filterItems= Diseases.filter(a=>a[0].toLowerCase().includes(search.toLowerCase()))
        return filterItems.length===0?"No Results":filterItems
    }
    function handleSearch(e){
        e.preventDefault();
        updateSearch(e.target.value);
    }
    if(diseasePage!==undefined){
        return(
            <div id="diseaseCatalogResult">
            <h1 id="diseaseh1">{diseasePage[0]}</h1>
            <h2 className="subHeader">About The Disease</h2>
            <p className="diseaseP">{diseasePage[1]}</p>
            <h2 className="subHeader">Treatments For The Disease</h2>
            <p className="diseaseP">{diseasePage[2]}</p>
            <button className="goBack goBack--selected" onClick={()=>{updateSearch('');createPage(undefined);}}>Go Back</button>
            </div>
        )
    }
    let filterItems=getSearch();
    return(
        <div id="diseaseCatalogContainer">
        <input type="text" placeholder="Search For Diseases"id="searchBar" onChange={handleSearch}/>
        <div id="diseaseContents">
            {(filterItems!=='Waiting For Search Input' && filterItems!=='No Results')?filterItems.map((a,h)=>{
                return <div key={h} className="diseaseBox" >
                <h5 id="placeholder" onClick={()=>{createPage(a)}}>{a[0]}</h5>
                </div>
            }):<h3 id="invalidResults">{filterItems}</h3>}
        </div>
        
        </div>
    );
}