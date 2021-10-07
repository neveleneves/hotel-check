import { takeLeading, put, call } from "redux-saga/effects";
import { GET_HOTELS } from "./types";

export function* sagaWatcher() {
  yield takeLeading(GET_HOTELS, sagaWorker);
}

function* sagaWorker(dataFromState) {
  try {
    const payload = yield call(getHotels, { ...dataFromState.payload });
    yield put({ type: GET_HOTELS, payload });
  } catch (e) {
    console.warn(e.message);
  }
}

const getCheckOut = (checkIn, countDay) => {
  return new Date(checkIn + 86400000 * countDay);
};

const getCheckIn = (checkIn) => {
  return new Date(checkIn);
};

const getHotels = async (data) => {
  const checkOutDate = getCheckOut(Date.parse(data.dateValue), data.countDay);
  const checkInDate = getCheckIn(data.dateValue);

  const response = await fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${
      data.location
    }&currency=rub&checkIn=${
      checkInDate.toISOString().split("T")[0]
    }&checkOut=${checkOutDate.toISOString().split("T")[0]}&limit=30`
  );
  return await response.json();
};
