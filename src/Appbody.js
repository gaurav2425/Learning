import { Button } from "@material-ui/core";
import React from "react";
import "./appbody.css";
import CardRow from "./CardRow";
import Card from "./Card";
import Nav from "./Nav";
import Topartists from "./Topartists";
import Generes from "./Generes";
import AlbumReleases from "./AlbumReleases";
function Appbody() {
  return (
    <div>
      <div className="generes_row_main">
        <div className="generes_row_title">
          <h1>Genres</h1>
        </div>
        <div className="generes_row">
          <Generes type="Rock"></Generes>
          <Generes type="Pop Music"></Generes>
          <Generes type="Musical theatre"></Generes>
          <Generes type="Hip hop music"></Generes>
          <Generes type="Jazz"></Generes>
          <Generes type="Classical Music"></Generes>
          <Generes type="Blues"></Generes>
          <Generes type="Heavy metal"></Generes>
          <Generes type="Country music"></Generes>
          <Generes type="Dance music"></Generes>
          <Generes type="Electronic dance music"></Generes>
          <Generes type="Punk rock"></Generes>

          <Generes type="Reggae"></Generes>
          <Generes type="Most Played"></Generes>
          <Generes type="World"></Generes>
          <Generes type="Singing"></Generes>
          <Generes type="Alternative rock"></Generes>
          <Generes type="Techno"></Generes>
        </div>
      </div>

      <div className="topartists_main">
        <div className="topartists_title">
          <h1>Popular Artists</h1>
        </div>
        <div className="topartists">
          <Topartists
            singer="Arjit Singh"
            ImageUrl="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="Neha Kakkar"
            ImageUrl="https://wallpapercave.com/wp/wp7930780.jpg"
          ></Topartists>
          <Topartists
            singer="Armaan Malik"
            ImageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="vishal Mishra"
            ImageUrl="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="Darshan Raval"
            ImageUrl="https://images.pexels.com/photos/167378/pexels-photo-167378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="Tony Kakkar"
            ImageUrl="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="Jubin Nautiyal"
            ImageUrl="https://images.pexels.com/photos/1918160/pexels-photo-1918160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="Yo Yo Honey Singh"
            ImageUrl="https://images.pexels.com/photos/167523/pexels-photo-167523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
          <Topartists
            singer="justin Bieber"
            ImageUrl="https://images.pexels.com/photos/2231751/pexels-photo-2231751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></Topartists>
        </div>
      </div>

      <div className="albumreleses_main">
        <div className="album_title">
          <h1>Top Albums</h1>
        </div>
        <div className="albumreleses_row">
          <div className="albumreleses">
            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LXoEmrxJMR5hkSLkQgV6kO6a5kRndcOUQw&usqp=CAU"></AlbumReleases>
            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj0tQ3KDcWac4WdYRb_yTfNTNEw3u0YQMpw&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVzTCbw92rIlK__d3Q-lhaHzyt879rbsEZw&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HvpNOlhMWRfCKVX9souxvNUFlMNnawyeCA&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFnWXER0lNkoTsvoFLVPGRHH-owUqTW3uCw&usqp=CAU"></AlbumReleases>
            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTIAcU3LlFOhIzir6m--oJpFiD76T7MNfaA&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxUvEq4PbcxCXz-3LiXTPkmfgxkEM62Z1eA&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSZbv-bb5LcUQEkwrlyU2HjrZUNQTCz5m5g&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCH3Fz4Ia-NKtNzTfNP5-u3x1ltPO0hdozOw&usqp=CAU"></AlbumReleases>
            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXJpdJ33w8G_hWQInjZTC8hreSjwHl2Rbjg&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVOrtzd6AZES-YOkF_nEuCuCrH-9CCvNMOQ&usqp=CAU"></AlbumReleases>

            <AlbumReleases ImageUrl="https://i.pinimg.com/originals/62/b9/56/62b956a941f790615190583d9564fcd4.jpg"></AlbumReleases>
          </div>
        </div>
      </div>

      <div className="app_cards">
        <div className="app_cards_Row">
          <CardRow title="Specially For You"></CardRow>
          <CardRow title="Trending"></CardRow>
          <CardRow title="Show Might You Like"></CardRow>
          <CardRow title="Horror"></CardRow>
          <CardRow title="Horror"></CardRow>
          <CardRow title="Horror"></CardRow>
          <CardRow title="Horror"></CardRow>
          <CardRow title="Horror"></CardRow>
        </div>
      </div>
    </div>
  );
}

export default Appbody;
