
const StatCard = ({ title, value, icon, textColor, bgColor, span }) => {
  return (
    <div className="flex flex-col bg-white p-4 w-full border-[1px] border-gray-200">
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-lg ${bgColor} border-[1px] border-${textColor} text-${textColor} `}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 mt-4">{title}</p>
        <h2 className="text-lg font-semibold">{value} {span && <span className="text-xs">{span}</span>}</h2>
      </div>
    </div>  
  )
}

export default StatCard
