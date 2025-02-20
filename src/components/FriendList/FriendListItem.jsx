import css from "./FriendList.module.css"
import clsx from "clsx";

export default function FriendList({ avatar, name, isOnline }) {

  const styleCart = clsx(isOnline ? css.active : css.retired)
    
return (
<div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={styleCart}>{isOnline ? "Online" : "Offline"}</p>
</div>
)}