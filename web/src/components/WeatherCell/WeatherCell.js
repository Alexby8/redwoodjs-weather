export const QUERY = gql`
  query GetWeatherQuery($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Загрузка...</div>

export const Empty = () => <div>Пусто</div>

export const Failure = ({ error }) => (
  <div className="bg-rose-200 text-rose-600 p-2 mt-4">{error.message}</div>
)

export const Success = ({ weather }) => {
  return (
    <section className="mt-3">
      <h1 className="font-bold text-xl text-sky-900">{weather.city}</h1>
      <div className="flex items-center">
        <img src={weather.icon} alt="weather" />
        <span className="text-xl">
          {weather.temp}°С, {weather.conditions}
        </span>
      </div>
    </section>
  )
}
