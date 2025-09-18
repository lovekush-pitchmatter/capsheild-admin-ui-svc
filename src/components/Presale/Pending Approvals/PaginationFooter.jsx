export function TableFooter({
  rowsPerPage,
  totalEntries,
  startIndex,
  endIndex
}) {
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2">
      
        <p className="text-sm text-gray-600 ml-4">
          Showing {totalEntries === 0 ? 0 : startIndex + 1} to {endIndex} of {totalEntries} deposits
        </p>
      </div>
    </div>
  );
}
