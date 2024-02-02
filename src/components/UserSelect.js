import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../styles.css'

export default function UserSelect(props) {
  const [value, setValue] = React.useState('Elijah Hermann');
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([])

  const users = props.users
  let userNames = props.users?.map(user => { return `${user.first_name} ${user.last_name}`})

  return (
    <div className="userFilter">
      <h6>Filter: </h6>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          const userId = users.find(user => user.first_name === newValue.split(" ")[0])._id
          props.setSelectedUserId(userId)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        className="userDropDown"
        options={userNames}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="User" />}
      />
    </div>
  );
}