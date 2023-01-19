export const Page = () => {
  return (
    <>
      <div className="d-flex">
        {Array.from(
          { length: Math.ceil(book.length / itemsPerPage) },
          (x, i) => (
            <>
              <button
                // key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className="btn btn-rounded "
              >
                {i + 1}
              </button>
            </>
          )
        )}
      </div>
    </>
  );
};
