import React from 'react';
import { 
    WiNightThunderstorm, 
    WiDayThunderstorm,
    WiNightRainMix,
    WiDayRainMix,
    WiNightHail,
    WiDayHail,
    WiNightSnow,
    WiDaySnow,
    WiNightFog,
    WiDayFog,
    WiDaySunny,
    WiNightClear,
    WiNightCloudy,
    WiDayCloudy,
    WiCloud,
    WiThermometer,
    WiWindy,
    WiHumidity,
    WiBarometer
 } from 'react-icons/wi';

import '../../components/card/WeatherCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    marginTop: 100,
    marginLeft: "45%"
  },
  media: {
    height: 140,
  },
});

const getIcon = (weather) => {

    if (weather !== undefined){

        if ( weather[0] > 199 && weather[0] < 233 ){
            if( weather[3].endsWith("n")){
                return (<WiNightThunderstorm size="100px"/>);
            }else{
                return (<WiDayThunderstorm size="100px"/>);
            }

        }else if ( weather[0] > 299 && weather[0] < 322 ){
            if( weather[3].endsWith("n")){
                return (<WiNightRainMix size="100px"/>);
            }else{
                return (<WiDayRainMix size="100px"/>);
            }

        }else if ( weather[0] > 499 && weather[0] < 532 ){
            if( weather[3].endsWith("n")){
                return (<WiNightHail size="100px"/>);
            }else{
                return (<WiDayHail size="100px"/>);
            }
            
        }else if ( weather[0] > 599 && weather[0] < 623 ){
            if( weather[3].endsWith("n")){
                return (<WiNightSnow size="100px"/>);
            }else{
                return (<WiDaySnow size="100px"/>);
            }

        }else if ( weather[0] > 700 && weather[0] < 782 ){
            if( weather[3].endsWith("n")){
                return (<WiNightFog size="100px"/>);
            }else{
                return (<WiDayFog size="100px"/>);
            }

        }else if ( weather[0] === 800 ){
            if( weather[3].endsWith("n")){
                return (<WiNightClear size="100px"/>);
            }else{
                return (<WiDaySunny size="100px"/>);
            }

        }else if ( weather[0] > 800 && weather[0] < 805 ){
            if( weather[3].endsWith("n")){
                return (<WiNightCloudy size="100px"/>);
            }else{
                return (<WiDayCloudy size="100px"/>);
            }
        }else{
            return ( <WiCloud size="100px"/>)
        }
    }
}

const getCelsius = (kelvin) => {
    const cel = (kelvin - 273.15) * 5 / 9;
    const message = Math.round(cel) + ' \xB0C';
    return message;
}

export default function MediaCard({ weather, wind, mainInfo, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <h2>{title}</h2>
      <CardActionArea>
        {getIcon(weather)}
        <h3>{weather !== undefined ? weather[1] : null}</h3>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            -- Details --
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
            { mainInfo !== undefined ? (
                <>
                    <WiThermometer title="Temperature" size="30px" ></WiThermometer>
                    <span className="value">{ getCelsius(mainInfo[0]) }</span>
                </>
            ) : null }

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { wind !== undefined ? (
                <>
                    <WiWindy size="50px"/>
                    <span className="wind-value">{wind[1]}</span>
                </>
            ) : null }
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            { mainInfo !== undefined ? (
                <>
                    <WiHumidity size="30px"/>
                    <span className="value">{mainInfo[2]}</span>
                </>
            ) : null }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { mainInfo !== undefined ? (
                <>
                    <WiBarometer size="30px"/>
                    <span className="value">{mainInfo[1]}</span>
                </>
            ) : null }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}