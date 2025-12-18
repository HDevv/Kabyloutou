import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="card product">
      {product.image && (
        product.raw ? (
          <img className="thumb" src={encodeURI(product.image)} alt={product.name} />
        ) : (
          <Image
            className="thumb"
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            priority={false}
          />
        )
      )}
      <div className="product-head">
        <h3>{product.name}</h3>
        <strong className="price">{product.price}€ / {product.unit}</strong>
      </div>
      <p className="muted">{product.desc}</p>
      <div style={{display:'flex', gap:8}}>
        <Link className="btn small" href={`/catalogue/${product.slug}`}>Voir le détail</Link>
        <Link className="btn small reserve-btn" href="/contact">Réserver</Link>
      </div>
    </div>
  );
}
