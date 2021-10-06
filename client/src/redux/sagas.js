import { takeLeading, put, call } from "redux-saga/effects";
import { GET_HOTELS } from "./types";

export function* sagaWatcher() {
  yield takeLeading(GET_HOTELS, sagaWorker);
}

function* sagaWorker(dataFromState) {
  try {
    const payload = yield call(getHotels, { ...dataFromState.payload });
    console.log(payload);
    yield put({ type: GET_HOTELS, payload });
  } catch (e) {
    console.log(e.message);
  }
}

const getHotels = async (data) => {
    console.log(data)
  const response = await fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${data.location}&currency=rub&checkIn=${data.date}&checkOut=2021-12-12&limit=10`
  );
  return await response.json();
};
