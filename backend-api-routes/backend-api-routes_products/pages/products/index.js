// next/Link, um zu den Detailseiten springen zu können
// useSWR = React-Hook, um Daten zu fetchen und zu cachen

import Link from "next/link";
import useSWR from "swr";

// Fetcher-Funktion, um URL zu als json zurückzugeben
const fetcher = (url) => fetch(url).then((res) => res.json());

//React-Komponente
export default function ProductsPage() {
  //useSWR anstoßen, fetcht Daten aus api/products
  const { data, error } = useSWR("/api/products", fetcher);

  //Statusmeldungen für den Enduser
  if (error) return <div>Fehler beim Laden</div>;
  if (!data) return <div>Lädt ...</div>;

  //Bei erfolgreicher Datenübertragung, wird für jedes Produkt eine Listenelement angelegt, das per <Link> zur Seite /products/id führt
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.name} - {product.price}
            {product.currency}
          </Link>
        </li>
      ))}
    </ul>
  );
}
