import UPILogo from "../../assets/icons/upiLogo.svg";
import paytm from "../../assets/icons/paytm.svg";
import Visa from "../../assets/icons/visa.svg";
import MasterCard from "../../assets/icons/mastercard.svg";
import Amex from "../../assets/icons/amex.svg";
import DinnerClub from "../../assets/icons/diners.svg";

export const paymentMethods = [
  {
    icon: UPILogo,
  },
  {
    icon: paytm,
  },
  {
    icon: Visa,
  },
  {
    icon: MasterCard,
  },
  {
    icon: Amex,
  },
  {
    icon: DinnerClub,
  },
];

export const pricingList = [
  {
    planName: "Mini",
    price: "From ₹7/day",
    numberAccount: 1,
    features: [
      "Ad-free music listening",
      "Group Session",
      "Download 30k songs/device on 5 devices",
    ],
  },
  {
    free: 1,
    planName: "Individual",
    price: "₹119",
    numberAccount: 1,
    features: [
      "Ad-free music listening",
      "Group Session",
      "Download 10k songs/device on 5 devices",
    ],
  },
  {
    free: 1,
    planName: "Duo",
    price: "₹149",
    numberAccount: 2,
    features: [
      "For couples who live together",
      "Ad-free music listening",
      "Group Session",
      "Download 10k songs/device on 5 devices",
    ],
  },
  {
    free: 6,
    planName: "Family",
    price: "₹179",
    numberAccount: 1,
    features: [
      "For family who live together",
      "Block explicit music",
      "Ad-free music listening",
      "Group Session",
      "Download 10k songs/device on 5 devices",
    ],
  },
];
