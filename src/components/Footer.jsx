export default function Footer() {
  return (
    // Ekstra luft på sidene på mobil, så Exit-knappen i spillene ikke dekker teksten
    <footer
      className="py-5 px-20 md:px-5"
      style={{
        background: "#1a1a1f",
        color: "white",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <p>&copy; 2026 LOOP ENTERTAINMENT SYSTEMS</p>
    </footer>
  );
}
