export default function TabButton({ children, onSelect }) {
  console.log("Tab button component");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
