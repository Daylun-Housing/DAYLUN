
interface Label {
  id: string;
  text: string;
  anchorLeft: number;  // % position on image
  anchorTop: number;
  labelLeft: number;   // % position where label floats
  labelTop: number;
  link: string;
}

const labels: Label[] = [
  {
    id: "1",
    text: "Evan Board",
    anchorLeft: 20,
    anchorTop: 55,
    labelLeft: 5,
    labelTop: 55,
    link: "https://daylun.myshopify.com/products/evan-board",
  },
  {
    id: "2",
    text: "Waterproof Membrane",
    anchorLeft: 20,
    anchorTop: 40,
    labelLeft: 9,
    labelTop: 40,
    link: "https://daylun.myshopify.com/products/waterproof-membrane-1",
  },
  {
    id: "3",
    text: "Roof Hanger",
    anchorLeft: 34,
    anchorTop: 15,
    labelLeft: 6,
    labelTop: 15,
    link: "https://daylun.myshopify.com/products/roof-trusses",
  },
  {
    id: "4",
    text: "SIPs Walls",
    anchorLeft: 68,
    anchorTop: 9,
    labelLeft: 92,
    labelTop: 9,
    link: "https://daylun.myshopify.com/products/sips-walls-structural-insulated-panels",
  },
  {
    id: "5",
    text: "Sheathing",
    anchorLeft: 65,
    anchorTop: 30,
    labelLeft: 92,
    labelTop: 30,
    link: "https://daylun.myshopify.com/collections/frontpage",
  },
  {
    id: "6",
    text: "Vegetable Glue",
    anchorLeft: 70,
    anchorTop: 66,
    labelLeft: 88,
    labelTop: 66,
    link: "https://daylun.myshopify.com/products/vegetable-glue",
  },
];


const LabeledImageWithLines: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl">
      <img
        src="/Home_Sketch.jpg"
        alt="Car labeled"
        className="w-auto h-auto"
      />

      {/* SVG Lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {labels.map((label) => (
          <line
            key={`line-${label.id}`}
            x1={`${label.anchorLeft}%`}
            y1={`${label.anchorTop}%`}
            x2={`${label.labelLeft}%`}
            y2={`${label.labelTop}%`}
            stroke="#0474BC"
            strokeWidth={2}
          />
        ))}
      </svg>

      {/* Labels */}
      {labels.map((label) => (
        <a
          key={label.id}
          href={label.link}
          className="absolute text-[var(--lighter-blue)] hover:text-[var(--txt-bright)] bg-[var(--label-bg-color)] bg-opacity-70 px-1 py-1 text-xs rounded"
          style={{
            top: `${label.labelTop}%`,
            left: `${label.labelLeft}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {label.text}
        </a>
      ))}
    </div>
  );
};

export default LabeledImageWithLines;