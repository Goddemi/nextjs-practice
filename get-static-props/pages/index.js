function HomePage({ product }) {
  return (
    <ul>
      <li>{product.id}</li>
      <li>{product.title}</li>
      <li>Product 3</li>
    </ul>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      product: [{ id: "hi", title: "me" }],
    },
  };
};

export default HomePage;
