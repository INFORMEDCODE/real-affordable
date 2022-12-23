const STATES = {
    WA: "WA",
    NSW: "NSW",
    VIC: "VIC",
    QLD: "QLD",
    SA: "SA",
    TAS: "TAS",
    NT: "NT",
} as const;

const StateSelect = () => {
    return (
        <select className="border border-solid rounded p-2 border-black">
            {Object.values(STATES).map((state) => (
                <option value={state}>{state}</option>
            ))}
        </select>
    );
};

export default StateSelect;
