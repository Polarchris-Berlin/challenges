//importieren der Funktion für getProductByID, die im Array nach id`s sucht
import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  //da dynamischer Dateiname, wird die IS aus der URL extrahiert und req.query gespeichert
  const { id } = req.query;

  // Nach dem Produkt suchen, es wird das Produkti Objekt oder undefined zurückgegeben
  const product = getProductById(id);

  // Wenn ID nicht existiert, Fehlermeldung ausgeben
  if (!product) {
    return res
      .status(404)
      .json({ message: `Kein Produkt mit der ID ${id} gefunden` });
  }

  // Bei erfolgreicher Produktsuche den Status 200/OK und das Produkt zurückgeben
  res.status(200).json(product);
}

// Hier wird nun das Prdoukt mit der ID angezeigt: http://localhost:3000/api/products/1. Ist das Produkt nicht vorhanden, erscheint die Fehlermeldung
