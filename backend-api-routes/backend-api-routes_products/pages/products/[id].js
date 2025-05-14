import { useRouter } from "next/router";
import useSWR from "swr";

//Gleiche Fetcher Funktion wie in index.js
const fetcher = (url) => fetch(url).then((res) => res.json());

//Router-Funktion nutzen und ID aus der URL extrahieren
export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  //wenn ID existiert, useSWR-Funktion starten
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  //Status-Informationen für den Enduser
  if (error) return <div>Fehler beim Laden des Produktes</div>;
  if (!data) return <div>Lädt ....</div>;

  //ID existiert = Daten aus data auslesen
  const { name, price, currency, description, category } = data;

  //Daten für Browser rendern
  return (
    <div>
      <h1>{name}</h1>
      <p>
        <strong>Preis:</strong> {price}
        {currency}
      </p>
      <p>
        <strong>Kategorie:</strong> {category}
      </p>
      <p>
        <strong>Beschreibung:</strong> {description}
      </p>
    </div>
  );
}
