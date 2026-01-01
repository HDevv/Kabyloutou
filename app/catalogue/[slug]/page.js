import Link from 'next/link';
import Image from 'next/image';
import { products, getProductBySlug, formatPriceTTC } from '../../../lib/products';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const p = getProductBySlug(params.slug);
  return {
    title: p ? `${p.name} - Kabyloutou` : 'Produit',
    description: p ? p.desc : 'Détail produit'
  };
}

export default function ProductDetail({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return (
      <section>
        <h1>Produit introuvable</h1>
        <p>Le produit demandé n’existe pas.</p>
        <Link className="btn" href="/catalogue">Retour au catalogue</Link>
      </section>
    );
  }

  return (
    <section>
      <nav style={{marginBottom:12}}>
        <Link className="btn detail back-btn" href="/catalogue">← Retour au catalogue</Link>
      </nav>
      <div className="grid product-detail" style={{gridTemplateColumns:'1.2fr .8fr', gap:16}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px'}}>
          {product.image && (
            product.raw ? (
              <img className="thumb" src={encodeURI(product.image)} alt={product.name} />
            ) : (
              <Image className="thumb" src={product.image} alt={product.name} width={600} height={350} />
            )
          )}
        </div>
        <div className="card">
          <h1 style={{marginTop:0}}>{product.name}</h1>
          <p className="muted" style={{marginTop:8}}>{product.desc}</p>
          <div className="product-description" style={{marginTop:16, marginBottom:32}}>
            {product.longDesc.split('\n').map((paragraph, index) => (
              paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : <br key={index} />
            ))}
          </div>
          <div style={{display:'flex', alignItems:'baseline', gap:8, margin:'16px 0'}}>
            <strong className="price" style={{fontSize:20}}>{formatPriceTTC(product.price)}</strong>
            <span className="muted">/ {product.unit} TTC</span>
          </div>
          <hr style={{border: 'none', borderTop: '1px solid var(--line)', margin: '20px 0'}} />
          <div style={{display:'flex', gap:8}}>
            <Link className="btn primary reserve-btn" href="/contact">Réserver</Link>
            <Link className="btn detail" href="/contact" style={{lineHeight:'1.2'}}>Demander un devis</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
