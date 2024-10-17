"use client";

const TicketForm = ({ orderState, updateOrderState }) => {

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 justify-between">
        <label>Code</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.code} onChange={(e) => updateOrderState({ code: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Order ID</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.orderId} onChange={(e) => updateOrderState({ orderId: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Storage ID</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.storageId} onChange={(e) => updateOrderState({ storageId: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Storage Name</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.storageName} onChange={(e) => updateOrderState({ storageName: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Ticket ID</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.ticketId} onChange={(e) => updateOrderState({ ticketId: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Platform</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.platform} onChange={(e) => updateOrderState({ platform: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Printed</label>
        <input type="checkbox" checked={orderState?.printed} onChange={(e) => updateOrderState({ printed: e.target.checked })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Shipped</label>
        <input type="checkbox" checked={orderState?.shipped} onChange={(e) => updateOrderState({ shipped: e.target.checked })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>State</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.state} onChange={(e) => updateOrderState({ state: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>City</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.city} onChange={(e) => updateOrderState({ city: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Street</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.street} onChange={(e) => updateOrderState({ street: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Zip</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.zip} onChange={(e) => updateOrderState({ zip: e.target.value })} />
      </div>
      <div className="flex gap-2 justify-between">
        <label>Whova QR</label>
        <input className="text-theme1Dark1" type="text" value={orderState?.whovaQr} onChange={(e) => updateOrderState({ whovaQr: e.target.value })} />
      </div>
    </div>
  );
};

export default TicketForm;
