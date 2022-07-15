import Link from "next/link";
import styles from "../scss/components/Albumcard.module.scss";
export default function AlbumCard({ album }) {
  return (
    <Link href={`/albums/${album.slug}`}>
      <img
        className={styles.image}
        src={album?.cover?.mediaItemUrl}
        alt={album.cover.altText}
      />
    </Link>
  );
}
