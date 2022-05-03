import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <div>
      <Html>
        <Head>
          <title>Health Plus a Medical</title>

          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="keywords" content="Health Plus a Medical" />

          <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
          <link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" Department="" />
          <link href="css/services.css" rel="stylesheet" type="text/css" media="all" />
          <link href="css/ziehharmonika.css" rel="stylesheet" type="text/css"/>
          <link href="css/JiSlider.css" rel="stylesheet"/>
          <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
          <link href="css/font-awesome.css" rel="stylesheet"/>
          <link href="//fonts.googleapis.com/css?family=Raleway:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800" rel="stylesheet"/>
          <link href="//fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900" rel="stylesheet"/>
          <script src="js/jquery-2.2.3.min.js"></script>

        </Head>
        <body>
          <Main />
          <NextScript />


          <script src="js/JiSlider.js"></script>
          <script src="js/ziehharmonika.js"></script>
          <script src="js/jquery.waypoints.min.js"></script>
          <script src="js/jquery.countup.js"></script>
          <script defer src="js/jquery.flexslider.js"></script>
          <script type="text/javascript" src="js/move-top.js"></script>
          <script type="text/javascript" src="js/easing.js"></script>
          <script src="js/jarallax.js"></script>
          <script src="js/SmoothScroll.min.js"></script>
          <script src="js/bootstrap.js"></script>
          <script src="js/custom.js"></script>

        </body>
      </Html>
      </div>
    )
  }
}
export default MyDocument;
