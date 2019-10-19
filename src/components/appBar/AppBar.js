import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useReduxState } from '../../utils/State';
import Select from '../selectMenu/Select';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function SearchAppBar(props) {
  let [ { city, country }, dispatch ] = useReduxState();
  const [chosenCountry, setChosenCountry] = useState(country);

  const { appName } = props;
  const classes = useStyles();

  const handleChangeCity = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: "updateCity", city: e.target.value, country: chosenCountry })
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button size="large" variant="outlined"><Link to="/" className={classes.link}>Today</Link></Button>
          <Button size="large" variant="outlined"><Link to="/week" className={classes.link}>7 Days</Link></Button>
          <Typography className={classes.title} variant="h6" noWrap>
            {/* **************************************************** */}
            { city === "" ? appName : city }
            {/* **************************************************** */}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Cities…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={handleChangeCity}
            />
          </div>
          <Select chosenCountry={chosenCountry} optionsArr={["DK", "EN", "BG"]} title="Country" selectCountry={(c) => setChosenCountry(c)}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}