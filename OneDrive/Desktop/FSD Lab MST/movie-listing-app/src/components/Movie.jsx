function Movie({ title, year }) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>{title}</h2>
      <p>Year: {year}</p>
    </div>
  );
}

export default Movie;