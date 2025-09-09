export function HeaderRow({headerRow }) {
  return (
    <thead className="bg-gray-100 ">
      <tr>
        {headerRow.map((td, i) => (
          td === "checkbox" ? (        
            <th className="p-2 text-left" key={i}><input type="checkbox" /></th>
            ) : (<th className="p-2 text-left" key={i}>{td}</th>
            )
        ))}        
      </tr>
    </thead>
  );
}

// export function HeaderRow({ headerRow }) {
//   return (
//     <thead className="bg-gray-100">
//       <tr>
//         {headerRow.map((td, i) => (
//           <th className="p-2 text-left" key={i}>{td}</th>
//         ))}
//       </tr>
//     </thead>
//   );
// }
