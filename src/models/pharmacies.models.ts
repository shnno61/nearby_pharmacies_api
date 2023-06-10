 import { resutls} from "../types/results.types"
import geohash from "ngeohash";
import db from "../database";
import axios from "axios";
 

export class Pharmacies {
      async searchNearbyPharmacies( lat :number, lng :number, radius :number,name:string,number:number): Promise<resutls[]> 
      {
        try 
        {
          const latMin = lat - (radius / 111.2);
          const latMax = lat + (radius / 111.2);
          const lonMin = lng - (radius / (111.2 * Math.cos(lat * (Math.PI / 180))));
          const lonMax = lng + (radius / (111.2 * Math.cos(lat * (Math.PI / 180))));
          const  bboxes = geohash.bboxes(latMin, lonMin, latMax, lonMax);
           
          const sql = `
    SELECT name, api, latitude, longitude
    FROM pharmacies
    WHERE geohash IN (${bboxes.map(hash => `'${hash}'`).join(',')})
  `;
  const conn =await db.connect();
  const pharmacies:any =await conn.query(sql);
  conn.release();

  const responses = await Promise.all(pharmacies.map(pharmacy => {
    const url=`${pharmacy.api}/${name}/${number}`; 
    axios.get(url);
  }));

  const specificResult = 'available';

  const matchingPharmacies = responses.filter((_pharmacies: any, index: string | number) => {
    const response = responses[index];
    return response.data.status.includes(specificResult);
  });

  const final_result:any = matchingPharmacies.map((pharmacy) => {
    const { name,latitude, longitude } = pharmacy;  
    return { name,latitude, longitude}; })
  
   
  return final_result ;

          } 
         catch (error) {
            throw new Error();
          }
       }
}