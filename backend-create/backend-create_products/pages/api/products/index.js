import dbConnect from "@/db/connect"; //Funktion zum Verbindungsaufbau zum MongoDB Cluster und cachen
import Product from "@/db/models/Product"; //Mongoose Modell um find() und create() ausführen zu können

export default async function handler(request, response) {
  await dbConnect(); //baut die Verbidnung, bevor Query ausgeführt wird

  //alle Produkte mit GET erhalten
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  // neues Produkt mit POST anlegen
  if (request.method === "POST") {
    const productData = request.body; //parst Json Bodies automatisch- holt alle Formularfelder als Objekt
    await Product.create(productData); //legt neuen Datensatzu in der Collection "products" an
    return response.status(201).json({ status: "Product created!" }); //Status 201 steht für erfolgreich erstellt
  }

  response.status(405).json({ status: "Method not allowed." });
}
