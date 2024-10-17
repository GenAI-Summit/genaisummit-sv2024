"use client";
import { useState } from "react";

const apiUrl = "https://api-test.gptdao.ai";

const useOrders = () => {
  const [orderState, setOrderState] = useState({
    code: "",
    orderId: "",
    loading: false,
    storageId: "",
    storageName: "",
    ticketId: "",
    platform: "",
    printed: false,
    shipped: false,
    state: "",
    city: "",
    street: "",
    zip: "",
    whovaQr: "",
  });

  const updateOrderState = (updates) => {
    setOrderState((prevState) => ({ ...prevState, ...updates }));
  };

  const getInfo = async (orderId) => {
    if (!orderId) {
      return null;
    }
    try {
      const res = await fetch(`${apiUrl}/tickets/order?order_id=${orderId}`);
      const data = await res.json();
      console.log(data);

      updateOrderState({
        storageId: data?.data?.storage?.id || "",
        storageName: data?.data?.storage?.name || "",
        ticketId: data?.data?.ticket?.id || "",
        platform: data?.data?.ticket?.order_platform || "",
        printed: data?.data?.ticket?.printed === 1,
        shipped: data?.data?.ticket?.shipped === 1,
        state: data?.data?.ticket?.state || "",
        city: data?.data?.ticket?.city || "",
        street: data?.data?.ticket?.street_address || "",
        zip: data?.data?.ticket?.zip || "",
        whovaQr: data?.data?.ticket?.whova_qr_id || "",
      });
    } catch (error) {
      console.error("Error fetching order info:", error);
    } finally {
      updateOrderState({ loading: false });
    }
  };

  const scanCode = async (code) => {
    updateOrderState({ code, loading: true });

    if (code.includes("whova")) {
      updateOrderState({ loading: false });
      return null;
    }

    if (/^\d+$/.test(code)) {
      const orderId = code.slice(0, 11);
      updateOrderState({ orderId });
      await getInfo(orderId);
      return null;
    }

    if (code.includes("lu.ma")) {
      const url = new URL(code);
      const pk = url.searchParams.get("pk");
      try {
        const res = await fetch(`${apiUrl}/tickets/luma/id/scan?proxy_id=${pk}`);
        if (!res.ok) {
          throw new Error("Failed to fetch order");
        }
        const data = await res.json();
        console.log(data);
        const orderId = data?.data?.order_id;
        updateOrderState({ orderId });
        await getInfo(orderId);
      } catch (e) {
        console.error(e);
      }
      return null;
    }

    updateOrderState({ loading: false });
    throw new Error("Invalid code");
  };


  return {
    scanCode,
    orderState,
    updateOrderState,
  };
};

export default useOrders;