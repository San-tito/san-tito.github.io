export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <html>
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/styles.css" />
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
    </head>
    <body
      style="background:url(/static/trianglify.svg)"
      class="relative bg-cover bg-center bg-no-repeat py-8 bg-background"
    >
      {children}
    </body>
  </html>
);
