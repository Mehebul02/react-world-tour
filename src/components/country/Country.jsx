
import './Country.css'
const Country = ({country}) => {
    console.log(country)
   const {name,flags,region,capital,population}=country
    return (
        <div className="country">
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Region:{region}</p>
            <p>{capital}</p>
            <p>{population}</p>
        </div>
    );
};

export default Country;