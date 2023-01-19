// import Cookies from "js-cookie";
// import { useState } from "react";

// export function Cookie() {
//   //   Cookies.set("exampleCookie", "hello world", { path: "/" });
//   //   const exampleCookie = Cookies.get("exampleCookie");
//   //   console.log(exampleCookie);
//   // }

// //   const [selectedValue, setSelectedValue] = useState("option1");

// //   const handleChange = (event) => {
// //     setSelectedValue(event.target.value);
// //   };
// //   console.log(selectedValue);
// //   const value = selectedValue;

// //   return (
// //     <div>
// //       <label>
// //         Choose an option:
// //         <select value={selectedValue} onChange={handleChange}>
// //           <option value="option1">Option 1</option>
// //           <option value="option2">Option 2</option>
// //           <option value="option3">Option 3</option>
// //         </select>
// //       </label>
// //       <div>You selected: {value}</div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';

// const config = {
//   totalPages: 10,
//   pageSize: 50
// };

// function MyComponent() {
//   const [selectedPage, setSelectedPage] = useState(1);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, [selectedPage]);

//   const fetchData = () => {
//     // Fetch data for the selected page here, using the config object
//     // and the selectedPage state variable
//     // For example:
//     const startIndex = (selectedPage - 1) * config.pageSize;
//     const endIndex = startIndex + config.pageSize;
//     const pageData = someData.slice(startIndex, endIndex);
//     setData(pageData);
//   };

//   const handleChange = (event) => {
//     setSelectedPage(event.target.value);
//   };

//   return (
//     <div>
//       <label>
//         Choose a page:
//         <select value={selectedPage} onChange={handleChange}>
//           {Array.from(Array(config.totalPages).keys()).map((page) => (
//             <option key={page + 1} value={page + 1}>
//               Page {page + 1}
//             </option>
//           ))}
//         </select>
//       </label>
//       <div>
//         {data.map((item) => (
