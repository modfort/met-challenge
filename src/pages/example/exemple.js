import React, { useState, useEffect } from "react";
import axios from "axios"
import "../example.css";

export default function Myexample() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/4534");

      if (!ignore) setData(result.data);
      console.log(data)
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

        {data.artistDisplayName!=="" &&
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

        <div className="additionalImages" >

          <ul>
          {data.additionalImages.map((item ,index)=> (
              <li >
                <img src={item } alt={index+"not found"} />
              </li>
            ))}
          </ul>
        </div>

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
      <Printdata />
    </div>
  );
}
