import * as usersData from "../data/data.json"


export async function load() {
    const e = 3;
    return {
      users:  usersData.users[Math.floor(Math.random()*e)]
    };
  }