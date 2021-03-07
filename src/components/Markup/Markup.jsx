import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';

const Markup = ({ children }) => (
  <>
    <PageTitle text="React. HomeWork-1. Components." />
    <Container>{children}</Container>
    <PageTitle text="" />
  </>
);

export default Markup;
