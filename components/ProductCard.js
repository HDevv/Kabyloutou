import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="card product">
      <div className="thumb-container">
        {product.image && (
          product.raw ? (
            <img 
              className="thumb" 
              src={encodeURI(product.image)} 
              alt={product.name}
              loading="eager"
            />
          ) : (
            <Image
              className="thumb"
              src={product.image}
              alt={product.name}
              width={800}
              height={600}
              priority={true}
              quality={95}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          )
        )}
      </div>
      <div className="product-head">
        <h3>{product.name}</h3>
        <strong className="price">{product.price}€ / {product.unit}</strong>
      </div>
      <p className="muted">{product.desc}</p>
      <div style={{display:'flex', gap:8}}>
        <Link className="btn small detail" href={`/catalogue/${product.slug}`}>Voir le détail</Link>
        <Link className="btn small reserve-btn" href="/contact">Réserver</Link>
      </div>
    </div>
  );
}
