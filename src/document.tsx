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
        {/* <!-- Twitter conversion tracking base code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config','po3b5');",
          }}
        />
        {/* <!-- End Twitter conversion tracking base code --> */}
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
