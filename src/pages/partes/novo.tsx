import React, { useRef } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { Layout } from '@/components/templates'
import { Input } from '@/components/atoms'

import { toast } from 'react-toastify'

import * as Yup from 'yup'

import getValidationErrors from '@/utils/getValidationErrors'

const NovaParte: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async (
    data: FormData,
    { reset }
  ) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        lastname: Yup.string().required('O sobrenome é obrigatório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('O e-mail é obrigatório'),
        cpf: Yup.string().required('O CPF é obrigatório'),
        telephone: Yup.string()
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
    <Layout title="Nova Parte - Contraktor">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="bg-white shadow-md mt-6 md:mt-0 rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex md:mb-6">
            <Input
              name="name"
              label="Nome"
              placeholder="Nome"
              required
              size={1 / 2}
            />
            <Input
              name="lastname"
              label="Sobrenome"
              placeholder="Sobrenome"
              required
              size={1 / 2}
            />
          </div>
          <div className="-mx-3 md:flex md:mb-6">
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="mail@mail.com"
              required
              size={1}
            />
          </div>
          <div className="-mx-3 md:flex md:mb-6">
            <Input
              name="cpf"
              label="CPF"
              placeholder="XXX.XXX.XXX-XX"
              mask="cpf"
              required
              size={1 / 2}
            />
            <Input
              name="telephone"
              label="Telefone"
              placeholder="(XX) XXXX-XXXX"
              mask="telefone"
              size={1 / 2}
            />
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

export default NovaParte
