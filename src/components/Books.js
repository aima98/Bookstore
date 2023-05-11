import BooksList from './BooksList';
import AddBook from './AddBook';

export default function Books() {
  return (
    <>
      <BooksList />
      <div className="horizontal-divider" />
      <AddBook />
    </>
  );
}
