import Head from "next/head";
import styles from "../styles/Home.module.css";
import fs from "fs/promises";
import path from "path";

export default function Home(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      {products.map((ele) => {
        return ele.name;
      })}
      엥
    </div>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  console.log(jsonData);

  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
};
