import {
  // Meta,
  // Title,
  Links,
  Main,
  Scripts,
} from 'ice';

import { Conf } from '@/config/page';

export default function Document({ pagePath }) {
  const { title = '-', pageMeta } = Conf[pagePath] || {};
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        {/* <Meta /> */}
        {(pageMeta || []).map((pm, pi) => {
          return (
            <meta
              key={pi}
              {...pm}
            />
          );
        })}
        {/* <Title /> */}
        <title>{title}</title>
        <Links />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17046827907"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-17046827907');",
          }}
        />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
