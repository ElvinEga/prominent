"use client";

import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/navigation";

const PaystackCheckout = ({
  email,
  amount,
}: {
  email: string;
  amount: number;
}) => {
  const navigate = useRouter();

  const publicKey = "pk_test_6fbd24a2dc3e96dba0ebdd93e878b61a725e681e";
  const [paying, setPaying] = useState(false);

  const handleSuccess = (response: any) => {
    console.log("Payment Success:", response);
    navigate.push("/success");
  };

  const handleClose = () => {
    console.log("Payment window closed");
  };

  return (
    <PaystackButton
      text={paying ? "Processing..." : "Pay with Paystack"}
      className="bg-red-500 w-full text-white px-4 py-2 rounded-lg hover:bg-red-300 transition-colors duration-300"
      email={email}
      amount={amount * 100} // Paystack works with kobo (multiply by 100)
      publicKey={publicKey}
      onSuccess={handleSuccess}
      onClose={handleClose}
      disabled={paying}
      currency="USD"
    />
  );
};

export default PaystackCheckout;
