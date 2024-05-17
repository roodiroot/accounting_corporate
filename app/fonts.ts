import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
export const gropled = localFont({
    src: 'fonts/Gropled-Bold.woff2',
    variable: '--font-gropled',
    display: 'swap',
  })
export const gilroy = localFont({
    src: [
        {
          path: 'fonts/Gilroy-Regular.woff2',
          weight: '400',
          style: 'normal',
        },
        {
          path: 'fonts/Gilroy-Medium.woff2',
          weight: '500',
          style: 'normal',
        },
        {
          path: 'fonts/Gilroy-Semibold.woff2',
          weight: '600',
          style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Bold.woff2',
            weight: '700',
            style: 'normal',
          },
      ],
    variable: '--font-gilroy',
    display: 'swap',
  })
   