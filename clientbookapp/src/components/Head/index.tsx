import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Client Book</title>
      <meta name="description" content="Crie sua lista de contatos." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.jpeg" />
    </Head>
  );
}
