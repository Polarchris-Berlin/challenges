import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleRandomClick = () => {
    const random = getRandomElement(volumes);
    router.push(`/volumes/${random.slug}`);
  };
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button onClick={handleRandomClick}>Random Volume</button>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={title}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
