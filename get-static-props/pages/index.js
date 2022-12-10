import path from "path";
import fs from "fs/promises";

export function HomePage({ product }) {
  return (
    <ul>
      <li>{product.id}</li>
      <li>{product.title}</li>
      <li>Product 3</li>
    </ul>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join();
  await fs.readFile();

  return {
    props: {
      product: [{ id: "hi", title: "me" }],
    },
  };
};

export default HomePage;
