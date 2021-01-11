import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react'
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Dropzone: React.FC<InputProps> = ({ name, label, required, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)
  const [preview, setPreview] = useState(defaultValue)

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPreview(null)
    }
    const previewURL = URL.createObjectURL(file)
    setPreview(previewURL)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = ''
        setPreview(null)
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value)
      }
    })
  }, [fieldName, registerField])

  return (
    <div className="md:w-full px-3 mb-6 md:mb-0">
      <label
        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
        htmlFor="file"
      >
        Arquivo
      </label>
      {!preview ? (
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
                  ref={inputRef}
                  onChange={handlePreview}
                  className="sr-only"
                  {...rest}
                />
              </label>
              <p className="pl-1">ou segure e arrasta</p>
            </div>
            <p className="text-xs text-gray-500">
              Arquivos suportados PNG, JPG, PDF
            </p>
          </div>
        </div>
      ) : (
        <h1>Arquivo enviado</h1>
      )}
    </div>
  )
}

export default Dropzone
