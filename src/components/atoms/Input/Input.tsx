import React, { useEffect, useRef, useCallback } from 'react'
import { useField } from '@unform/core'

import { cpf, telefone } from './masks'

interface Props {
  name: string
  label?: string
  required?: boolean
  size: number
  mask?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({
  name,
  label,
  required,
  size,
  mask,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'telefone') {
        telefone(e)
      }
      if (mask === 'cpf') {
        cpf(e)
      }
    },
    [mask]
  )

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      <div
        className={`md:${size === 1 ? 'w-full' : 'w-1/2'} px-3 mb-6 md:mb-0`}
      >
        <label
          className="uppercase tracking-wide text-black text-xs font-bold mb-2"
          htmlFor={fieldName}
        >
          {label}
          {required && '*'}
        </label>
        <input
          className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          onKeyUp={mask && handleKeyUp}
          {...rest}
        />
        {error && (
          <div>
            <span className="text-red-500 text-xs italic">{error}</span>
          </div>
        )}
      </div>
    </>
  )
}

export default Input
