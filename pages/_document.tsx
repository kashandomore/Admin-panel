import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head />
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800;900&family=Libre+Baskerville:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="debug-screens">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
