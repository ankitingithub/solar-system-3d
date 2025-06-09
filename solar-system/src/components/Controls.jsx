export default function Controls({ speeds, setSpeeds }) {
  const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  return (
    <div className="control-panel">
      {planetNames.map((name, i) => (
        <div key={name}>
          <label>{name}</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.01"
            value={speeds[i]}
            onChange={(e) => {
              const newSpeeds = [...speeds];
              newSpeeds[i] = parseFloat(e.target.value);
              setSpeeds(newSpeeds);
            }}
          />
        </div>
      ))}
    </div>
  );
}
