function List({ items }) {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <ol className="list-decimal">
          {items.map((item) => (
            <li key={items.id}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default List;
