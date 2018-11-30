import {TEST} from 'actionTypes/test';

export const test = info => ({
type: TEST,
payload: {
  info
}
});