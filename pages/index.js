import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const YourComponent = () => (
  <Image
    src="/images/pic.png" // Route of the image file
    className={utilStyles.borderCircle}
    height={150} // Desired size with correct aspect ratio
    width={150} // Desired size with correct aspect ratio
    alt="Raza Malik"
  />
);

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          [Helllo,I'm Raza .I'm a student of web3.You can contect me on{" "}
          <Link href=" https://twitter.com/RazaMalik99?t=f46Nh2OZDF6CHJ3H3CDEEw&s=08">
            Twitter
          </Link>
          ]
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
