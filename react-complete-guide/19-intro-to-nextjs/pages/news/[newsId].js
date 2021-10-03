import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>{`The News Detail ${newsId} page`}</h1>;
};

export default DetailPage;
