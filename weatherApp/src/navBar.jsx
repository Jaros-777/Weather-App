import "./navBar.css";
import sun from "./assets/icon-sun.png";
import searchIcon from "./assets/icon-search.png";
import iconList from "./assets/icon-list.png";
import emptyStar from "./assets/icon-empty-star.png";
import fullStar from "./assets/icon-full-star.png";
import trash from "./assets/icon-trash.png";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function NavBar(props) {
  const [favouriteIcon, setFavouriteIcon] = useState(false);

  const [favoriteLocation, setFavouriteLocation] = useState([
    {
      id: 1,
      name: "Warszawa",
      favourite: true,
    },
    {
      id: 2,
      name: "Tokio",
      favourite: true,
    },
  ]);

  function removeFavLoc(index) {
    const newList = favoriteLocation.filter((e) => e.id !== index);
    setFavouriteLocation(newList);
  }

  function addFavLoc() {
    const newLoc = {
      id: uuid(),
      name: props.city,
      favourite: true,
    };
    setFavouriteLocation([...favoriteLocation, newLoc])
  }

  return (
    <>
      <div id="top">
        <div id="input-field">
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                props.changeTown(props.city);
              }
            }}
            type="text"
            placeholder="Search"
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
          />
        </div>
        <button onClick={addFavLoc} id="fav-btn">
          <img src={favouriteIcon ? fullStar : emptyStar} alt="emptyStar" />
          <div id="fav-hint" >
            <p>Add to favourite</p>
          </div>
        </button>
        <button onClick={()=>{props.changeTown(props.city)}}>
          <img src={searchIcon} alt="searchIcon" />
        </button>
        <div id="fav-location">
          <li>
            <img src={iconList} alt="iconList" />
            <ul id="fav-location-list">
              <p style={{borderBottom: "2px solid black"}} >Favourite Locations</p>
              {favoriteLocation.length === 0 ? (
                <p>Empty</p>
              ) : (
                favoriteLocation.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => {
                        props.changeTown(l.name);
                      }}
                    >
                      {l.name}
                    </button>
                    <button
                      onClick={() => {
                        removeFavLoc(l.id);
                      }}
                    >
                      <img src={trash} alt="trash" />
                    </button>
                  </li>
                ))
              )}
            </ul>
          </li>
        </div>
      </div>
    </>
  );
}

export default NavBar;
