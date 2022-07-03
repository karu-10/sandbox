import "./styles.css";

export default function App() {
  const list = [1, 2, 3, 4, 5];
  const object = [
    {
      name: "saito",
      age: 23
    },
    {
      name: "yamada",
      age: 24
    }
  ];
  return (
    <div className="App">
      <h1>map-practice</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
      {object.map((data) => (
        <div>
          {data.name}
          <span>{data.age}</span>
        </div>
      ))}
    </div>
  );
}
