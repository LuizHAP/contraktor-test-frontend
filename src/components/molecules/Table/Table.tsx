import React from 'react'

const Table: React.FC = () => {
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
                Início
              </th>
              <th className="hidden md:table-cell py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Vencimento
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Arquivo
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">
                Contrato 1
              </td>
              <td className="hidden md:table-cell md:visible py-4 px-6 border-b border-grey-light">
                07/01/2021
              </td>
              <td className="hidden md:table-cell py-4 px-6 border-b border-grey-light">
                25/01/2021
              </td>
              <td className="py-4 px-6 border-b border-grey-light">Acessar</td>
              <td className="py-4 px-4 border-b border-grey-light">
                <div>
                  <button className="h-8 px-5 m-2 text-sm text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Editar
                  </button>
                  <button className="h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                    Deletar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
