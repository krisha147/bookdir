import { useState } from "react";
import { Authenticaton } from "./Authenticaton";

export function Pagination() {
  // Authenticaton();
  const itemsPerPage = 4;

  const dummyData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },

    // ...
    { id: 100, name: "Item 100" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(dummyData.slice(0, itemsPerPage));
  console.log(dummyData);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    setItems(dummyData.slice(startIndex, startIndex + itemsPerPage));
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {Array.from(
          { length: Math.ceil(dummyData.length / itemsPerPage) },
          (_, i) => (
            <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}
