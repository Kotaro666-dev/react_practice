import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/test1">test 1</Link>
        </li>
        <li>
          <Link href="/news/test2">test 2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
