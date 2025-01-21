const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "00%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-black">Propina:</h3>
        <form action="">
          <div>
            {tipOptions.map((tip) => (
              <div key={tip.id} className="flex gap-2">
                <label htmlFor={tip.id}>{tip.label}</label>
                <input id={tip.id} type="radio" name="tip" value={tip.value} />
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}
