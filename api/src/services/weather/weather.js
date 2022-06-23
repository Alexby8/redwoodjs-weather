import { fetch } from 'cross-undici-fetch'

import { UserInputError } from '@redwoodjs/graphql-server'

export const getWeather = async ({ zip }) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},RU&lang=ru&appid=696a410a951db7c39c5145d3e4640824`
  )
  const json = await response.json()

  if (json.cod === '404') {
    throw new UserInputError(`${zip} - неверный индекс`)
  }

  return {
    zip,
    city: json.name,
    conditions: json.weather[0].description,
    temp: Math.round(json.main.temp - 273.15),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
