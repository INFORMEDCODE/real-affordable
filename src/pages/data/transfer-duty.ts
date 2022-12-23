// rateTypes
// partThereof = (rate * ((PROP_PRICE - rangeLow) / 100)) + base
// full = rate * (PROP_PRICE / 100)
// dutiablePercent = ((PROP_PRICE - rangeLow) * rate) + base

type TransferDuties = {
    [key: string]: {
        state: string;
        transferDuties: TransferDuty[];
        source: string;
    };
};

export type TransferDuty = {
    rangeLow: number;
    rangeHigh: number;
    rate: number;
    base: number;
    rateType: string;
    equation?: string;
};

export const RateTypes = {
    PART_THEREOF: "partThereof",
    FULL: "full",
    DUTIABLE_PERCENT: "dutiablePercent",
    CUSTOM: "custom",
} as const;

export const TransferDuties: TransferDuties = {
    nsw: {
        state: "New South Wales",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 15000,
                rate: 1.25,
                base: 0,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 15000,
                rangeHigh: 32000,
                rate: 1.5,
                base: 187,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 32000,
                rangeHigh: 87000,
                rate: 1.75,
                base: 442,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 87000,
                rangeHigh: 327000,
                rate: 3.5,
                base: 1405,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 327000,
                rangeHigh: 1089000,
                rate: 4.5,
                base: 9805,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 1089000,
                rangeHigh: 3268000,
                rate: 5.5,
                base: 44095,
                rateType: RateTypes.PART_THEREOF,
            },
        ],
        source: "https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty",
    },
    wa: {
        state: "Western Australia",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 120000,
                rate: 1.9,
                base: 0,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 120001,
                rangeHigh: 150000,
                rate: 2.85,
                base: 2280,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 150001,
                rangeHigh: 360000,
                rate: 3.8,
                base: 3135,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 360001,
                rangeHigh: 725000,
                rate: 4.75,
                base: 11115,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 725000,
                rangeHigh: null,
                rate: 5.15,
                base: 28453,
                rateType: RateTypes.PART_THEREOF,
            },
        ],
        source: "https://www.wa.gov.au/government/publications/residential-land-fs",
    },
    sa: {
        state: "South Australia",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 12000,
                rate: 1.0,
                base: 0,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 12000,
                rangeHigh: 30000,
                rate: 2.0,
                base: 120,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 30000,
                rangeHigh: 50000,
                rate: 3.0,
                base: 480,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 50000,
                rangeHigh: 100000,
                rate: 3.5,
                base: 1080,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 100000,
                rangeHigh: 200000,
                rate: 4.0,
                base: 2830,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 200000,
                rangeHigh: 250000,
                rate: 4.25,
                base: 6830,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 250000,
                rangeHigh: 300000,
                rate: 4.75,
                base: 8955,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 300000,
                rangeHigh: 500000,
                rate: 5.0,
                base: 11330,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 500000,
                rangeHigh: null,
                rate: 5.5,
                base: 21330,
                rateType: RateTypes.PART_THEREOF,
            },
        ],
        source: "https://www.revenuesa.sa.gov.au/stampduty/rate-of-stamp-duty",
    },
    qld: {
        state: "Queensland",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 5000,
                rate: 0,
                base: 0,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 5000,
                rangeHigh: 75000,
                rate: 1.5,
                base: 0,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 75000,
                rangeHigh: 540000,
                rate: 3.5,
                base: 1050,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 540000,
                rangeHigh: 1000000,
                rate: 4.5,
                base: 17325,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 1000000,
                rangeHigh: null,
                rate: 5.75,
                base: 38025,
                rateType: RateTypes.PART_THEREOF,
            },
        ],
        source: "https://www.qld.gov.au/housing/buying-owning-home/advice-buying-home/transfer-duty/how-much-you-will-pay/calculating-transfer-duty/transfer-duty-rates",
    },
    vic: {
        state: "Victoria",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 25000,
                rate: 1.4,
                base: 0,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
            {
                rangeLow: 25000,
                rangeHigh: 130000,
                rate: 2.4,
                base: 350,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
            {
                rangeLow: 130000,
                rangeHigh: 960000,
                rate: 6,
                base: 2870,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
            {
                rangeLow: 960000,
                rangeHigh: 2000000,
                rate: 5.5,
                base: 0,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
            {
                rangeLow: 2000000,
                rangeHigh: null,
                rate: 6.5,
                base: 110000,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
        ],
        source: "https://www.sro.vic.gov.au/non-principal-place-residence-dutiable-property-current-rates",
    },
    nt: {
        state: "Nothern Territory",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 525000,
                rate: 0,
                base: 0,
                rateType: RateTypes.CUSTOM,
                equation:
                    "((0.06571441 * PROP_PRICE * 0.1) + 15 ) * (PROP_PRICE * 0.1)",
            },
            {
                rangeLow: 525001,
                rangeHigh: 3000000,
                rate: 4.95,
                base: 0,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
            {
                rangeLow: 3000001,
                rangeHigh: 5000000,
                rate: 5.75,
                base: 0,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
            {
                rangeLow: 5000001,
                rangeHigh: null,
                rate: 5.95,
                base: 0,
                rateType: RateTypes.DUTIABLE_PERCENT,
            },
        ],
        source: "https://conveyancing.com.au/need-to-know/stamp-duty-nt",
    },
    act: {
        state: "Australian Capital Territory",
        transferDuties: [
            {
                rangeLow: 0,
                rangeHigh: 260000,
                rate: 0.6,
                base: 0,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 260001,
                rangeHigh: 300000,
                rate: 2.2,
                base: 1560,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 300001,
                rangeHigh: 500000,
                rate: 3.4,
                base: 2440,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 500001,
                rangeHigh: 750000,
                rate: 4.32,
                base: 9240,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 750001,
                rangeHigh: 1000000,
                rate: 5.9,
                base: 20040,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 1000001,
                rangeHigh: 1455000,
                rate: 6.4,
                base: 34790,
                rateType: RateTypes.PART_THEREOF,
            },
            {
                rangeLow: 1455001,
                rangeHigh: null,
                rate: 4.54,
                base: 0,
                rateType: RateTypes.FULL,
            },
        ],
        source: "https://www.revenue.act.gov.au/duties/conveyance-duty?result_1060955_result_page=2",
    },
};
