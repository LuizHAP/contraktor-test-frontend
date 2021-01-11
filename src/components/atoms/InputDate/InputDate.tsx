import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'

import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string
  label?: string
  required?: boolean
  size: number
}

const InputDate: React.FC<Props> = ({
  name,
  label,
  required,
  size,
  ...rest
}) => {
  const datepickerRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)
  const [date, setDate] = useState(defaultValue || null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear()
      }
    })
  }, [fieldName, registerField])

  return (
    <>
      <div
        className={`md:${
          size === 1 ? 'w-full' : 'w-1/2'
        } px-3 mb-6 md:mb-0 flex flex-col`}
      >
        <label
          className="uppercase tracking-wide text-black text-xs font-bold mb-2"
          htmlFor={fieldName}
        >
          {label}
          {required && '*'}
        </label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
          ref={datepickerRef}
          selected={date}
          onChange={setDate}
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

export default InputDate
