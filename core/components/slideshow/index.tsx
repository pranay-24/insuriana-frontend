import { Slideshow as ComponentsSlideshow } from '~/components/ui/slideshow';

import SlideshowBG from './background-1.jpg';

const slides = [
  {
    cta: { label: 'Find My Plan', href: 'https://intc-marketplace.vercel.app/' },
    description:
      'For individuals and families, we tailor coverage that fits you — fast, fair, and flexible.',
    image: {
      src: SlideshowBG,
      altText: 'An assortment of brandless products against a blank background',
      blurDataUrl:
        'data:image/jpeg;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAAoAAAADoAQAAQAAAAcAAAAAAAAA/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgABwAKAwERAAIRAQMRAf/EABUAAQEAAAAAAAAAAAAAAAAAAAMJ/8QAIBAAAQQBBAMAAAAAAAAAAAAAAQIDBAURABIhMQYjgf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABkRAAIDAQAAAAAAAAAAAAAAAAARAQIhQf/aAAwDAQACEQMRAD8AoZ5EzayKWW3Syo0GyKPTJlsF9ts9klsKTu46GQOfms2awJfAKywmt1sRNgqK7PS0gSHI4WltTmBuKQckJJzgE9aYa0tP/9k=',
    },
    key: 1,
    title: 'The Smartest Way to Pick the Right Insurance for You.',
  }

  // {
  //   cta: { label: 'Shop now', href: '/#' },
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  //   key: 2,
  //   title: 'Great Deals',
  // },

  // {
  //   cta: { label: 'Shop now', href: '/#' },
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  //   key: 3,
  //   title: 'Low Prices',
  // },
];

export const Slideshow = () => <ComponentsSlideshow slides={slides} />;
