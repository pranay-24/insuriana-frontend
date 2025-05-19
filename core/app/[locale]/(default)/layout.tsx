import { setRequestLocale } from 'next-intl/server';
import { PropsWithChildren, Suspense } from 'react';

import { Footer } from '~/components/footer/footer';
import { Header, HeaderSkeleton } from '~/components/header';
import { Cart } from '~/components/header/cart';

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

export default async function DefaultLayout({ params, children }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
     <div>
        <Header cart={<Cart />}  />
      </div>
      </Suspense>
{/* 2xl:container */}
      <main className="flex-1 px-4  sm:px-10 lg:px-12  2xl:px-0">
        {children}
      </main>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
