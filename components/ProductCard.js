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
              width={600}
              height={350}
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
        <Link className="btn small" href={`/catalogue/${product.slug}`}>Voir le détail</Link>
        <Link className="btn small reserve-btn" href="/contact">Réserver</Link>
      </div>
    </div>
  );
}
