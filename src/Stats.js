export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="footer">
        <em>Start Adding Some items to your packing list 📦</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.reduce(
    (acc, current) => (current.packed ? acc + 1 : acc),
    0
  );
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log("Number of Packed Items: ", numPacked);
  console.log("Number of Items: ", numItems);
  console.log("Percentage of Packed Items: ", percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got Everything packed. Ready to GO 🛫`
          : `👜 You have ${numItems} items on your list, and you already packed ${numPacked}, (${percentage} %)`}
      </em>
    </footer>
  );
}
