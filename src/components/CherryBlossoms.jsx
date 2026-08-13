function CherryBlossoms() {
  const petals = Array.from({ length: 50 });

  return (
    <div className="cherry-blossoms" aria-hidden="true">
      {petals.map((_, index) => (
        <span
          key={index}
          className="petal"
          style={{
            "--left": `${Math.random() * 110 - 10}%`,
            "--top": `${Math.random() * 100}%`,
            "--delay": `${Math.random() * -20}s`,
            "--duration": `${12 + Math.random() * 12}s`,
            "--size": `${7 + Math.random() * 10}px`,
            "--wind": `${15 + Math.random() * 30}vw`,
            "--rotation": `${Math.random() * 360}deg`,
          }}
        />
      ))}
    </div>
  );
}

export default CherryBlossoms;