export const TableroItem = ({title, total, icon, colorIcon, children }) => {
  return (
    <div>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
        <div className="flex justify-center w-full text-lg font-bold">
            <h1>{ title }</h1>
        </div>
        <hr /><br />
        <div className="columns-2">
            <div className="flex items-center justify-end w-full">
            <span className={`text-2xl ${colorIcon} rounded-md shadow-sm mr-2 p-2`}>{ icon }</span>
            </div>
            <div className="flex items-center justify-center w-full">
            <p>{ total }</p>
            </div>
        </div>
        { children }
        </div>
    </div>
  )
}
