import React, {useState, useEffect} from 'react'
import ItemCard from '../components/ItemCard'
import UserSelect from '../components/UserSelect'
import Grid from '@mui/material/Grid';
import '../styles.css'


function Favourites() {
    const [users, setUsers] = useState([])
    const [favouriteItems, setFavouriteItems] = useState([])
    const [selectedUserId, setSelectedUserId] = useState("65bae6e07c1b1c2ce959a578")
    const [load, setLoad] = useState(10)

    const loadMoreItems = () => {
      setLoad(load + favouriteItems.length - 10);
    }
    console.log(selectedUserId)
    useEffect(()=> {
      const fetchFavouriteItems = async() => {
        const user = await fetch(`http://localhost:8080/users/${selectedUserId}`)
        .then(res => res.json())
        .then(data => {
          const favourites = data.favourites
          console.log("new")
          console.log(favourites)
          return fetch('http://localhost:8080/items/favourites', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(favourites)
          });
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setFavouriteItems(data)
        })
        .catch(err=> {
          console.error(err)
        });

      }

      const fetchUsers = async () => {
        const users = await fetch('http://localhost:8080/users').then(res => res.json());
        return users     
      }
      
      const fetchBoth = async() => {
        const users = await fetchUsers();
        setUsers(users);
        await fetchFavouriteItems();
        // const items = await fetchItems();
        // setFavouriteItems(items)
        console.log(favouriteItems)
      }

      fetchBoth();

    }, [selectedUserId])

    console.log(load)

    return (
        <div className="container">
            <h3 id="centeredHeader">Favourites</h3>
            <UserSelect users = {users} setSelectedUserId={setSelectedUserId}/>
            <Grid id="itemGrid" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {favouriteItems?.slice(0,load)?.map(item => {
                return (
                  <ItemCard {...item} key={item._id} users={users} />
                )
              })}
            </Grid>
            
            {load < favouriteItems?.length && (<button id="loadBtn" onClick={loadMoreItems}>Load more</button>)}
        </div>
    )
}

export default Favourites