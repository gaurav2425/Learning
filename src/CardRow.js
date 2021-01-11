import React from "react";
import "./CardRow.css";
import Card from "./Card";
function CardRow({ title }) {
  return (
    <div className="cardrow_main">
      <div className="rowtitle">
        <h1>{title}</h1>
      </div>
      <div className="cardrow">
        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEv4W9DIf18y1neEAd2mhFjOLNpdKVtUKeA&usqp=CAU"></Card>
        </div>
        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbLrNwvQ3k5aIr4cQf6p3KdP9NO77X3qy_A&usqp=CAU"></Card>
        </div>
        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PdWlg5MlDQqQNxnGGkeDXnuMRW2sKU7iiw&usqp=CAU"></Card>
        </div>

        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwQm_82pQwJnKB5ohd4yKLcmsQ4Rcle4STA&usqp=CAU"></Card>
        </div>
        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUC_Jb1GZVz5lskzkJ4_9XP9O67g45R1Opfw&usqp=CAU"></Card>
        </div>

        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7gUNhvyPrwyPHNVZhbcEVb1KHS74GfdFyA&usqp=CAU"></Card>
        </div>
        <div>
          <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUC_Jb1GZVz5lskzkJ4_9XP9O67g45R1Opfw&usqp=CAU"></Card>
        </div>
      </div>
    </div>
  );
}

export default CardRow;
