const rooms = {
  ServerRoom: { minLevel: 2, open: "09:00", close: "11:00", cooldown: 15 },
  Vault: { minLevel: 3, open: "09:00", close: "10:00", cooldown: 30 },
  "R&D Lab": { minLevel: 1, open: "08:00", close: "12:00", cooldown: 10 },
};

module.exports = rooms;
