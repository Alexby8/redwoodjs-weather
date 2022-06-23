import { useState } from 'react'

import { Form, TextField, Submit } from '@redwoodjs/forms'

import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <>
      <div className="container mx-auto pt-10">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md px-5 py-5">
          <Form onSubmit={onSubmit} className="flex flex-row">
            <TextField
              name="zip"
              className="basis-3/4 rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
              placeholder="Индекс"
              maxLength="6"
              validation={{ required: true, pattern: /^\d{6}$/ }}
            />
            <Submit className="basis-1/4 px-8 rounded-r-lg bg-cyan-300 font-semibold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
              Найти
            </Submit>
          </Form>

          {zip && <WeatherCell zip={zip} />}
        </div>
      </div>
    </>
  )
}

export default HomePage
