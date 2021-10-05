import Head from "next/head";

const HeadTag = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
    </Head>
  );
};

export default HeadTag;
