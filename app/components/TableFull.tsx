import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";

const data = [
    {
      id: 1,
      name: "John Doe",
      title: "Developer",
      status: "Active",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Designer",
      status: "Inactive",
      role: "User",
    },
    {
      id: 3,
      name: "Bob Johnson",
      title: "Manager",
      status: "Active",
      role: "Admin",
    },
    {
      id: 4,
      name: "Sarah Davis",
      title: "Developer",
      status: "Inactive",
      role: "User",
    },
  ];


const Table = () => {

    // const Arrow = ({ direction:any }) => {
    //     if (direction === "asc") {
    //         return <FaSortUp className="inline ml-1" />;
    //     }
    //     if (direction === "desc") {
    //         return <FaSortDown className="inline ml-1" />;
    //     }
    //     return <FaSort className="inline ml-1" />;
    // };
    
    // function sortByColumn(a:any, ba:any, columna:any, directiona:any) {
    //     if (column && direction) {
    //       if (a[column] < b[column]) {
    //         return direction === "asc" ? -1 : 1;
    //       }
    //       if (a[column] > b[column]) {
    //         return direction === "asc" ? 1 : -1;
    //       }
    //     }
    //     return 0;
    //   }

    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);

    const sortedData = data.sort(sortByColumn);

    const handleSort = (column:any) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    function sortByColumn(a:any, b:any) {
        if (sortColumn && sortDirection) {
            if (a[sortColumn] < b[sortColumn]) {
                return sortDirection === "asc" ? -1 : 1;
            }
            if (a[sortColumn] > b[sortColumn]) {
                return sortDirection === "asc" ? 1 : -1;
            }
        }
        return 0;
    }

    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort("name")}
                                >
                                    Name <Arrow direction={sortColumn === "name" ? sortDirection : ""} />
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort("title")}
                                >
                                    Title <Arrow direction={sortColumn === "title" ? sortDirection : ""} />
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort("status")}
                                >
                                    Status <Arrow direction={sortColumn === "status" ? sortDirection : ""} />
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort("role")}
                                >
                                    Role <Arrow direction={sortColumn === "role" ? sortDirection : ""} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedData.map((row:any) => (
                                <tr key={row.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full ${row.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;