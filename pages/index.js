import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from '../components/layout';
import Link from "next/link";
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/pic.png" // Route of the image file
    className={utilStyles.borderCircle}
    height={150} // Desired size with correct aspect ratio
    width={150} // Desired size with correct aspect ratio
    alt="Raza Malik"
  />
);

export default function Home() {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>[Helllo,I'm Raza .I'm a student of web3.You can contect me on <Link href=" https://twitter.com/RazaMalik99?t=f46Nh2OZDF6CHJ3H3CDEEw&s=08">Twitter</Link>]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.)
      </p>
    </section>
    {/* GOING TO NEXT PAGE  */}
<div>
<Link href="/post/first-post">NEXT POST</Link>
</div>
  </Layout>
  
);

}