import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendList({ friends: { avatar, name, isOnline } }) {
  const styleCart = clsx(isOnline ? css.active : css.retired);

  return (
    <div>
      <img src={avatar} className={css.image} alt="Avatar" width="48" />
      <p className={css.textName}>{name}</p>
      <p className={styleCart}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
