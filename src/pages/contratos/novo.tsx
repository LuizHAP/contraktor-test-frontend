import React, { useRef, useState } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { Layout } from '@/components/templates'
import { Dropzone, Input, InputDate, Button } from '@/components/atoms'

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
        dueDate: Yup.date().required('A Data de Vencimento é obrigatória'),
        parties: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required('O nome é obrigatório'),
            lastname: Yup.string().required('O sobrenome é obrigatório'),
            email: Yup.string()
              .email('Digite um email válido')
              .required('O e-mail é obrigatório'),
            cpf: Yup.string().required('O CPF é obrigatório'),
            telephone: Yup.string()
          })
        )
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
            <Dropzone name="file" label="Arquivo" />
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
