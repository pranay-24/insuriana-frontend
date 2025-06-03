import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from "~/components/home/hero";
import { VideoHero } from "~/components/home/video-hero";
import { VideoHero3 } from "~/components/home/video-hero-v3";

import { Features } from "~/components/home/features";
import { ThreeFeatures } from "~/components/home/3-features";
import { Reviews } from "~/components/home/reviews";
import { VideoProgress } from "~/components/home/video-progress";
import { Newsletter } from "~/components/home/newsletter";
import { ImageGridCards } from "~/components/home/ImageGridCards";
import { AboutHero } from "~/components/about/about-hero";
import { MissionValues } from "~/components/about/mission-values";
import { Stats} from "~/components/about/stats";
import { AboutHero1 } from "~/components/about/about-hero-1";

import { getSessionCustomerAccessToken } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { ProductCardCarousel } from '~/components/product-card-carousel';
import { ProductCardCarouselFragment } from '~/components/product-card-carousel/fragment';
import { Slideshow } from '~/components/slideshow';
import {VideoText} from '~/components/about/video-with-text';

const HomePageQuery = graphql(
  `
    query HomePageQuery {
      site {
        newestProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        featuredProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
      }
    }
  `,
  [ProductCardCarouselFragment],
);

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('Home');
  const customerAccessToken = await getSessionCustomerAccessToken();

  const { data } = await client.fetch({
    document: HomePageQuery,
    customerAccessToken,
    fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
  });

  const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
  const newestProducts = removeEdgesAndNodes(data.site.newestProducts);

  return (
    <>
     {/* <Hero /> */}
     <VideoHero/>
      {/* <Slideshow /> */}
      <Features />
      <VideoText/>
        <VideoProgress/> 
      <ImageGridCards/>
     <MissionValues />
      {/* <AboutHero /> */}
       {/* <AboutHero1 /> */}
      
      {/* <Stats/> */}
     <Reviews />
     
        {/* <ProductCardCarousel
          products={featuredProducts}
          showCart={false}
          showCompare={false}
          title={t('Carousel.featuredProducts')}
        /> */}
       
        {/* <ProductCardCarousel
          products={newestProducts}
          showCart={false}
          showCompare={false}
          title={t('Carousel.newestProducts')}
        /> */}
     
       {/* <Slideshow /> */
       }

       {/* <Newsletter /> */}
       <VideoHero3/>
    </>
  );
}

export const runtime = 'edge';
