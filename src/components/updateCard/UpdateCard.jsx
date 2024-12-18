import PropTypes from "prop-types";
import styles from "./UpdateCard.module.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const UpdateCard = ({ update }) => {
  const { id, title, description, accountId, date } = update;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/update/${id}`, { state: { update } });
  };
  return (
    <article className={styles.updateCard}>
      <h3>{title.length > 34 ? `${title.slice(0, 34)}...` : title}</h3>
      <p className={styles.author}>
        By: {accountId} <span>on {new Date(date).toLocaleDateString()}</span>
      </p>
      <p className={styles.content}>
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <Button text="Read More &rarr;" handleClick={handleClick} />
    </article>
  );
};

UpdateCard.propTypes = {
  update: PropTypes.object,
};

export default UpdateCard;
