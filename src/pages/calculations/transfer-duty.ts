import { RateTypes, TransferDuty } from "../data/transfer-duty";

const calculatePartThereof = () => {};
const calculateFull = () => {};
const calculateDutiablePercent = () => {};

export const calculateTransferDuty = <TransferDuty>({
    rangeLow,
    rangeHigh,
    rate,
    base,
    rateType,
}) => {
    switch (rateType) {
        case "partThereof":
            return calculatePartThereof();
        case "full":
            return calculateFull();
        case "dutiablePercent":
            return calculateDutiablePercent();
        default:
            // return error instead when unknown rateType
            return 0;
    }
};
