import axios from 'axios';

export const getAllActivities = async (cb) => {
  try {
    let result = await axios({
      method: 'GET',
      url: 'https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io'
    })
    cb(result.data);
  } catch (error) {
    console.error(error);
  }
}