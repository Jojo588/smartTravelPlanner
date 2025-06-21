import sunny from '../images/weatherImages/kindpng_1780516.png';
import snowy from '../images/weatherImages/kindpng_1263083.png';
import overCast from '../images/weatherImages/weather-overcast.512x351.png';
import freezingRain from '../images/weatherImages/freezinrain.png';
import heavySnow from '../images/weatherImages/heavy snow.png';
import lightRain from '../images/weatherImages/light-rain-night.1024x1024.png';
import lighterRain from '../images/weatherImages/lightRain.png';
import lightSnow from '../images/weatherImages/lightsnow.png';
import mist from '../images/weatherImages/mist.png';
import scattered from '../images/weatherImages/scatteredClouds.png';
import sheet from "../images/weatherImages/sheet.png";
import shower from '../images/weatherImages/shower.png';
import tswithheavyrain from '../images/weatherImages/thundrerstormwithheavy.png';
import tswithlightrain from '../images/weatherImages/thunderstormwlight.png';
import fewclouds from '../images/weatherImages/weather_11356919.png';
import rainySnow from '../images/weatherImages/27413513.png';
import smoke from '../images/weatherImages/nature_13615109.png';
import storm from '../images/weatherImages/nature_13615109.png';
import sand from '../images/weatherImages/nature_13615109.png';
import volcanicAsh from '../images/weatherImages/icons8-volcano-100.png';
import tornado from '../images/weatherImages/vector-realistic-tornado-illustration.jpg';

const Weather = ({
  isLoading,
  city,
  temp,
  day2Temp,
  day3Temp,
  day4Temp,
  day5Temp,
  description,
  description2,
  description3,
  description4,
  description5
}) => {
  let temperature = Math.round(temp);
  let day2Temperature = Math.round(day2Temp);
  let day3Temperature = Math.round(day3Temp);
  let day4Temperature = Math.round(day4Temp);
  let day5Temperature = Math.round(day5Temp);

  const weatherMap = {
    'clear sky': sunny,
    'few clouds': sunny,
    'scattered clouds': scattered,
    'broken clouds': fewclouds,
    'overcast clouds': overCast,
    'light rain': lighterRain,
    'moderate rain': lightRain,
    'heavy intensity rain': freezingRain,
    'very heavy rain': tswithlightrain,
    'extreme rain': tswithlightrain,
    'freezing rain': freezingRain,
    'light intensity shower rain': shower,
    'shower rain': shower,
    'heavy intensity shower rain': shower,
    'ragged shower rain': shower,
    'thunderstorm with light rain': tswithheavyrain,
    'thunderstorm with rain': tswithheavyrain,
    'thunderstorm with heavy rain': tswithheavyrain,
    'light thunderstorm': tswithheavyrain,
    'thunderstorm': tswithheavyrain,
    'heavy thunderstorm': tswithheavyrain,
    'ragged thunderstorm': tswithheavyrain,
    'thunderstorm with drizzle': tswithheavyrain,
    'thunderstorm with heavy drizzle': tswithheavyrain,
    'light snow': lightSnow,
    'Snow': snowy,
    'Sleet': sheet,
    'Light shower sleet': sheet,
    'Shower sleet': sheet,
    'Light rain and snow': rainySnow,
    'Rain and snow': rainySnow,
    'Light shower snow': rainySnow,
    'Shower snow': snowy,
    'Heavy snow': heavySnow,
    'Heavy shower snow': heavySnow,
    'mist': mist,
    'smoke': smoke,
    'haze': mist,
    'sand/dust whirls': storm,
    'fog': mist,
    'sand': sand,
    'dust': storm,
    'volcanic ash': volcanicAsh,
    'squalls': storm,
    'tornado': tornado,
  };

  const descriptions = [description, description2, description3, description4, description5];
  const defaultWeather = sunny;

  const weatherIcons = descriptions.map(desc => weatherMap[desc] || defaultWeather);
  const [weather1, weather2, weather3, weather4, weather5] = weatherIcons;

  const condition = description;

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const todayIndex = today.getDay();

  const result = [];

  for (let i = 0; i < 7; i++) {
    const nextDayIndex = (todayIndex + i) % 7;
    result.push(daysOfWeek[nextDayIndex]);
  }

  if (isLoading) {
    return (
      <div className="h-56 flex items-center justify-center">
        <div className="flex items-center gap-2 text-lg font-medium">
          <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading weather...</span>
        </div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="capitalize text-center text-3xl font-semibold bg-white w-full h-56 rounded-md flex items-center justify-center">
        No city weather has been checked
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-4xl font-bold capitalize mb-3 max-sm:mb-0 max-sm:text-3xl'>{city}</h1>
      <div className='w-full h-40 rounded-md flex items-center font-semibold max-sm:h-32 max-md:h-36'>
        <img src={weather1} alt='current weather' className='w-2/12'/>
        <div className='w-3/12 text-center font-bold'>
          <p className='text-6xl max-md:text-4xl max-sm:text-xl'>{temperature}&deg;F</p>
          <p className='text-xl capitalize  max-md:text-base max-sm:text-xs'>{condition}</p>
        </div>

<div className='w-7/12 flex capitalize justify-around items-center'>
  {[
    { day: result[0], weather: weather1, temp: temperature, weatherDescription: description },
    { day: result[1], weather: weather2, temp: day2Temperature, weatherDescription: description2 },
    { day: result[2], weather: weather3, temp: day3Temperature, weatherDescription: description3 },
    { day: result[3], weather: weather4, temp: day4Temperature, weatherDescription:description4 },
    { day: result[4], weather: weather5, temp: day5Temperature, weatherDescription: description5 },
  ].map(({ day, weather, temp, weatherDescription}, idx) => (
    <div key={idx} className='text-center max-sm:text-xs'>
      <p>{day}</p>
      <div className='w-14 h-14 max-md:w-12 max-md:h-12 max-sm:w-6 max-sm:h-6 mx-auto'>
        <img
          src={weather}
          alt='forecast icon'
          className='w-full h-full object-contain'
          title={weatherDescription}
        />
      </div>
      <p>{temp}&deg;</p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Weather;
              