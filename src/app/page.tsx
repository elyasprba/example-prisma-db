import { CardProducts } from '@/components/card-product';
import { Navbar } from '@/components/navbar';
import { prisma } from '@/utils/prisma';

export default async function Home() {
  const products = await prisma.products.findMany();

  return (
    <main className="items-center">
      <Navbar />
      <div className="flex justify-center gap-3 p-8">
        {products.map((product, idx) => (
          <CardProducts key={idx} {...product} />
        ))}
      </div>
    </main>
  );
}
