import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/products';

export const metadata = { title: 'Catalogue - Kabyloutou' };

export default function Catalogue() {
  return (
    <section>
      <h1>Catalogue</h1>
      <p>Découvrez nos équipements disponibles à la location et réservez en quelques clics.</p>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
