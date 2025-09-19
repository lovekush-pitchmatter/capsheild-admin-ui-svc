export function TableHeader({tableHeader}) {
  return (
    <thead className="bg-gray-100 ">
      <tr>
        {tableHeader.map((td, i) => (
          td === "checkbox" ? (        
            <th className="p-2 text-left w-10" key={i}>
              <input type="checkbox" />
            </th>
          ) : td === "#" ? (
            <th className="p-2 text-left w-10" key={i}>
              {td}
            </th>
          ): (
            <th className="p-2 text-left" key={i}>
              {td}
            </th>
          )
        ))}        
      </tr>
    </thead>
  );
}
