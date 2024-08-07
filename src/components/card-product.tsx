import { Prisma } from '@prisma/client';
import Image from 'next/image';

import Picture from '../../public/image.svg';

interface CardProductsProps {
  name: string;
  price: Prisma.Decimal;
}

export const CardProducts = ({ name, price }: CardProductsProps) => {
  return (
    <div className="w-48 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
      <div className="relative ">
        <Image
          src={Picture}
          alt="Veggie tomato mix"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-amber-700 font-semibold mt-auto">
          IDR. {price.toString()}
        </p>
      </div>
    </div>
  );
};
