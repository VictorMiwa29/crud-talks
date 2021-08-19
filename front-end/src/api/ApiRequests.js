import axios from 'axios';
import { result } from 'lodash';

async function loginRequest(BODY) {
  try {
    result = await axios.post('URL', 'BODY')
    return result;
  } catch (error) {
    console.log(error)
  }
}

export default loginRequest;
