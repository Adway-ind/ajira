const floatingItems = [
  { type: "dash", color: "#F47B20", x: "8%", y: "18%", rotate: -12, size: 55, delay: "0s" },
  { type: "dash", color: "#F9C51B", x: "28%", y: "12%", rotate: 3, size: 48, delay: "1s" },
  { type: "dash", color: "#72A968", x: "55%", y: "8%", rotate: 32, size: 48, delay: "2s" },
  { type: "dash", color: "#A85B55", x: "75%", y: "20%", rotate: -25, size: 55, delay: "1.5s" },

  { type: "dash", color: "#D1284D", x: "12%", y: "55%", rotate: 30, size: 40, delay: "3s" },
  { type: "dash", color: "#72A968", x: "58%", y: "55%", rotate: 25, size: 42, delay: "2.2s" },
  { type: "dash", color: "#F9C51B", x: "82%", y: "58%", rotate: 5, size: 50, delay: "0.8s" },


  { type: "dash", color: "#A85B55", x: "48%", y: "82%", rotate: 45, size: 55, delay: "1.4s" },
  { type: "dash", color: "#F47B20", x: "68%", y: "78%", rotate: -5, size: 58, delay: "3.2s" },
];

export default function FloatingPattern() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {floatingItems.map((item, index) => (
        <span
          key={index}
          className={`floating-item floating-${item.type}`}
          style={{
            left: item.x,
            top: item.y,
            width: `${item.size}px`,
            height: item.type === "dash" ? "16px" : `${item.size}px`,
            backgroundColor: item.color,
            transform: `rotate(${item.rotate}deg)`,
            animationDelay: item.delay,
          }}
        />
      ))}
    </div>
  );
}