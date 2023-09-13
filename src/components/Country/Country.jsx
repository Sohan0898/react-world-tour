import './Country.css'

const Country = ({country}) => {
    console.log(country)
  const { name, flags, population, area,timezones } = country;
  return (
    <div className='country-component'>
      <h3>Name : {name.official}</h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p><small>Timezones : {timezones}</small></p>
    </div>
  );
};

export default Country;
