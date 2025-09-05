export function TableHeader({tableHeader}) {
  return (
    <thead className="bg-gray-100 ">
      <tr>
        {tableHeader.map((td, i) => (
          td === "checkbox" ? (        
            <th className="p-2 text-left" key={i}><input type="checkbox" /></th>
            ) : (<th className="p-2 text-left" key={i}>{td}</th>
            )
        ))}        
      </tr>
    </thead>
  );
}
