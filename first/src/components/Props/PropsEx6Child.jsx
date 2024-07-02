const PropsEx6Child = (p) => {
  return (
    <div>
      <h1>{p?.children?.props?.children[0]?.props?.children}</h1>
      <h2>{p?.children?.props?.children[1]?.props?.children}</h2>
      <h2>{p?.children?.props?.children[2]?.props?.children}</h2>
    </div>
  );
};

export default PropsEx6Child;
