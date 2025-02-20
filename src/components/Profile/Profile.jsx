import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
  return (
<div className={css.box}>
  <div>
    <img className={css.img}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.grey}>@{tag}</p>
    <p className={css.grey}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listelements}>
      <span className={css.namelist}>Followers</span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li className={css.listelements}>
      <span className={css.namelist}>Views</span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li className={css.listelements}>
      <span className={css.namelist}>Likes</span>
      <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>)};