import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/products';

export const metadata = { title: 'Catalogue - Bricoloc' };

export default function Catalogue() {
  return (
    <section>
      <h1>Catalogue</h1>
      <p>Découvrez nos équipements disponibles à la location. Réservez en quelques clics.</p>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
