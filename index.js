const fetch = require("node-fetch");

module.exports.all = async () => {
  const res = await fetch(`https://coronapi.glitch.me/api/all`).then(r => r.json());
  return res;
}

module.exports.countries = async () => {
  const res = await fetch(`https://coronapi.glitch.me/api/countries`).then(r => r.json());
  return res;
};

module.exports.states = async () => {
  const res = await fetch("https://coronapi.glitch.me/api/states").then(r => r.json());
  return res;
};
