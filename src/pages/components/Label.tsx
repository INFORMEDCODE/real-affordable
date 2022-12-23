type Label = {
    children: React.ReactNode;
};

const Label: React.FC<Label> = ({ children }) => {
    return <label className="text-lg font-bold">{children}</label>;
};

export default Label;
