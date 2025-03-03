import React, { useEffect, useState } from "react";
import OrderStat from "./OrderStat";



const WidgetOrderStats = () => {
  const [stats, setStats] = useState([
    { "title": "Total Orders", "value": 320, "icon": "📦" },
    { "title": "Pending Orders", "value": 45, "icon": "⏳" },
    { "title": "Completed Orders", "value": 250, "icon": "✅" },
    { "title": "Cancelled Orders", "value": 25, "icon": "❌" }
  
  ]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="widget-order-stats">
      {stats.map((stat, index) => (
        <OrderStat key={index} {...stat} />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
