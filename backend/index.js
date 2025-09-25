const express = require("express");
const cors = require("cors");
const employees = require("./employees.json");
const rooms = require("./rooms");
const timeToMinutes = require("./utility/timeToMinutes");
require("dotenv").config();
const Port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/simaccess", (req, res) => {
  let lastAccess = {};
  const resultData = employees.map((employee) => {
    const room = rooms[employee.room];
    let access = "Granted";
    let reason = "";

    const requestTime = timeToMinutes(employee.request_time);
    const roomOpenTime = timeToMinutes(room.open);
    const roomCloseTime = timeToMinutes(room.close);

    if (employee.access_level < room.minLevel) {
      reason = "Need higher access level";
      access = "Denied";
    } else if (requestTime < roomOpenTime || requestTime > roomCloseTime) {
      console.log("Room Unavailable/closed currently");
      reason = "Room Unavailable/closed currently";
      access = "Denied";
    } else {
      const key = `${employee.id}-${employee.room}`;
      if (lastAccess[key]) {
        const diff = requestTime - lastAccess[key];
        if (diff < room.cooldown) {
          access = "Denied";
          reason = `Cooldown active (${room.cooldown} min)`;
        }
      }
    }
    if (!reason) {
      reason = `Access granted to ${employee.room}`;
      lastAccess[`${employee.id}-${employee.room}`] = requestTime;
    }
    return {
      employeeId: employee.id,
      room: employee.room,
      access,
      reason,
    };
  });

  res.json(resultData);
});

app.listen(Port, () => console.log(`Backend running on port ${Port}`));
