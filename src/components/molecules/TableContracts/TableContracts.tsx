import React from 'react'

interface TableProps {
  data?: Object
}

const TableContracts: React.FC<TableProps> = ({ data }) => {
  const renderTableHeader = () => {
    let header = Object.keys(data[0])
    return header.map((key, index) => {
      return (
        <th
          className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          key={index}
        >
          {key}
        </th>
      )
    })
  }

  const renderTableData = () => {
    return data.map((contract, index) => {
      const { id, title, initialDate, dueDate, file } = contract
      return (
        <tr className="hover:bg-grey-lighter" key={index}>
          <td className="py-4 px-6 border-b border-grey-light">{title}</td>
          <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
            {initialDate}
          </td>
          <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
            {dueDate}
          </td>
          <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">{file}</td>
          <td className="py-4 px-4 border-b border-grey-light">
            <div>
              <button className="h-8 px-5 m-2 text-sm text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Editar {id}
              </button>
              <button className="h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                Deletar {id}
              </button>
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="container w-full mx-auto shadow-md rounded my-4 overflow-x-auto max-h-96">
      <div className="overflow-y flex-grow">
        <table className="text-left w-full">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Título
              </th>
              <th className="hidden md:table-cell py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Data de Início
              </th>
              <th className="hidden md:table-cell py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Data de Vencimento
              </th>
              <th className="hidden md:table-cell py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Arquivo
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  )
}

export default TableContracts
