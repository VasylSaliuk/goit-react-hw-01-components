import PropTypes from 'prop-types';

import styles from './Title.module.css';

const Title = ({ text }) => (
  <h2 className={styles.title}>{text}</h2>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
