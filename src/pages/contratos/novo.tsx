import React, { useRef } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { Layout } from '@/components/templates'
import { Input, InputDate } from '@/components/atoms'

import { toast } from 'react-toastify'

import * as Yup from 'yup'

import getValidationErrors from '@/utils/getValidationErrors'

const NovoContrato: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async (
    data: FormData,
    { reset }
  ) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        title: Yup.string().required('O Titulo é obrigatório'),
        initialDate: Yup.date().required('A Data de Início é obrigatória'),
        dueDate: Yup.date().required('A Data de Vencimento é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      console.log(data)

      reset()
    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }

  return (
    <Layout title="Novo Contrato - Contraktor">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded mt-6 md:mt-0 px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex md:mb-6">
            <Input
              name="title"
              label="Título"
              placeholder="Número do Título"
              required
              size={1}
            />
          </div>
          <div className="-mx-3 md:flex md:mb-6">
            <InputDate
              name="initialDate"
              label="Data de Início"
              placeholderText="DD/MM/YYYY"
              required
              size={1 / 2}
            />
            <InputDate
              name="dueDate"
              label="Data de Vencimento"
              placeholderText="DD/MM/YYYY"
              required
              size={1 / 2}
            />
          </div>
          <div className="-mx-3 md:flex mb-4">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="file"
              >
                Arquivo
              </label>
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Carregar um arquivo</span>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">ou segure e arrasta</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Arquivos suportados PNG, JPG, PDF
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-3 md:flex mt-2">
            <div className="md:w-full px-3">
              <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Layout>
  )
}

export default NovoContrato
