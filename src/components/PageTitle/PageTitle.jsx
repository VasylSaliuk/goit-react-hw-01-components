import PropTypes from 'prop-types';

import styles from './PageTitle.css';

const PageTitle = ({ text }) => (
  <header className="PageTitle">
    <h1 className={styles.title}>{text}</h1>
  </header>
);

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
