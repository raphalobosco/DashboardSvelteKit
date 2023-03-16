import * as usersData from "../data/data.json"

const e = Math.floor(Math.random()*3);

export async function load() {
    return {
      users:  usersData.users[e]
    };
  }