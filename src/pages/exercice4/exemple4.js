import React, {useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios"
import "../example.css";

export default function Exercice4() {

  const [data, setData] = useState({ hits: [] });
  let  {id}  = useParams();

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id);

      if (!ignore) setData(result.data);
    }

    fetchData();

    return () => { ignore = true; }
  }, [data]);

  function Printdata() {
    if (data.additionalImages === undefined)
      data.additionalImages = ["../../image/téléchargement.jpeg"]

    return (
      <div>
        <div className="title">
          <h1> {data.title} </h1>
        </div>

        {data.artistDisplayName !== "" &&
          <div className="artistDisplayName">
            <h2>{data.artistDisplayName}</h2>
          </div>
        }

        <div className="repository">
          <h3>{data.repository}</h3>
        </div >

        <div className="primaryImageSmall">

          {data.primaryImageSmall !== "" &&
            <img src={data.primaryImageSmall} alt={data.artistDisplayName + " dont have"} />
          }

        </div>

        
          
          {data.additionalImages!==undefined &&
          <div className="additionalImages" >
            <p>All this are others artwork of the same authors  </p>
            
            
            <ul>
            {
            data.additionalImages.map((item ,index)=> (
                <li key={index}>
                  <img src={item } alt={index+"not found"} />
                </li>
              ))}
            </ul>
      </div>
          }     
      
         
         <div>  
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{data.artistDisplayName}</td>
            </tr>

            <tr>
              <td>Title</td>
              <td>{data.title}</td>
            </tr>
            {data.objectDate !== "Date unavailable" &&
              <tr>
                <td>Date</td>
                <td>{data.objectDate}</td>
              </tr>
            }

            {data.dimensions !== "Dimensions unavailable" &&
              <tr>
                <td>Dimension</td>
                <td>{data.dimensions}</td>
              </tr>}
          </tbody>
        </table>
        </div> 
        {data.objectWikidata_URL !== "" &&
          <div className="objectWikidata_URL">
            <a href={data.objectWikidata_URL}>wikipedia</a>
          </div>
        }
      </div>
    );
  };

  return (
    <div>
      <Printdata/>
    </div>
  );
}
