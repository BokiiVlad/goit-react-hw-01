import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((el) => {
        return (
          <li key={el.id} className={css.friend}>
            <FriendListItem friends={el} />
          </li>
        );
      })}
    </ul>
  );
}
