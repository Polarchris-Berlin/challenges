//importieren der getAllProducts-Funktion, die ein statisches Array mit allen Produkten bereitstellt

import { getAllProducts } from "@/services/productServices";

//Export handler für eingehende HTTP requests
export default function handler(request, response) {
  //Abruf der Daten
  const products = getAllProducts();

  //Setzt HTTP-Status auf "200" / OK und schickt die Produkte als json zurück
  response.status(200).json(products);
}

// Unter http://localhost:3000/api/products kann nun das json-array mit allen Produkten aufgerufen werden
