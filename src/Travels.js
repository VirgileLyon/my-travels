import React from "react";
import Travel from "./Travel";

const travels = [
    {
      destination: "Lyon",
      country: "France",
      distance : "20 km",
      photo:
        "https://static.vueling.com/cms/media/1216826/lyon.jpg"
    },
    {
      destination: "Bordeaux",
      country: "France",
      distance : "30 km",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1200px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg"
    },
    {
      destination: "Chatillon sur Chalaronne",
      country: "France",
      distance : "40 km",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Halles_Châtillon_Chalaronne_7.jpg/1200px-Halles_Châtillon_Chalaronne_7.jpg"
    },
    {
      destination: "Paris",
      country: "France",
      distance : "50 km",
      photo:
        "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg"
    },
    {
        destination:
          "Nice",
        country: "France",
        distance : "60 km",
        photo:
          "https://cdn.getyourguide.com/img/tour_img-1007871-146.jpg"
      }
  ];
  
  const Travels = () => (
    <div>
      {travels.map(
        travels => (
        <Travel destination={travels.destination} photo={travels.photo} country={travels.country} distance={travels.distance} /> 
       ) )}
     </div>
  );
  
  export default Travels;