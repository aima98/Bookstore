export default function AddBook() {
  return (
    <section>
      <h2>ADD A NEW BOOK</h2>
      <form>
        <input type="text" name="book-title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add a Book</button>
      </form>
    </section>
  );
}
