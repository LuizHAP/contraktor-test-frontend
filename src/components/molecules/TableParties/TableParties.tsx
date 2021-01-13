import React from 'react'

import Part from '@/types/part'
interface TableProps {
  data?: Array<Part>
}
const TableParties = ({ data }) => {
  return (
    <div className="container w-full mx-auto shadow-md rounded my-4 overflow-x-auto max-h-96">
      <div className="overflow-y flex-grow">
        <table className="text-left w-full">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Nome
              </th>
              <th className="hidden md:table-cell py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Sobrenome
              </th>
              <th className="hidden md:table-cell  py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Email
              </th>
              <th className="hidden md:table-cell py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                CPF
              </th>
              <th className="hidden md:table-cell  py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Telefone
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: Part, index: any) => (
              <tr className="hover:bg-grey-lighter" key={index}>
                <td className="py-4 px-6 border-b border-grey-light">
                  {item.name}
                </td>
                <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
                  {item.lastname}
                </td>
                <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
                  {item.email}
                </td>
                <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
                  {item.cpf}
                </td>
                <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
                  {item.telefone}
                </td>
                <td className="py-4 px-4 border-b border-grey-light">
                  <div>
                    <button className="h-8 px-5 m-2 text-sm text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                      Editar {item.id}
                    </button>
                    <button className="h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                      Deletar {item.id}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableParties
