import Container from '../components/layout/Container';

export default function NotFound() {
  return (
    <Container className="plainhead">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="b-p" style={{ marginTop: 20 }}>
        That address is not part of this report.{' '}
        <a href="/">Go to the contents page</a>.
      </p>
    </Container>
  );
}
