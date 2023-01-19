import { isString } from "./typeOf.js";

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize }, // 명칭을 바꿔서 사용할 수 있음
} = globalThis;

const albums = [
  {
    id: "album_0zie",
    title: "Nightmare",
    artist: "오월오일 ( 五月五日 )",
    "release-date": "2022.10.08",
    like: 147,
    "song-count": 5,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg/melon/resize/640/quality/100/optimize",
    },
  },
  {
    id: "album_9ipw",
    title: "흔들리지 않아 (Feat. 폴킴)",
    artist: "TRADE L",
    "release-date": "2022.10.07",
    like: 306,
    "song-count": 1,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/72/305/11072305_20221006135934_500.jpg/melon/resize/640/quality/100/optimize",
    },
  },
];

export function saveStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, serialize(value)); // 키 값 저장
      resolve();
    } else {
      reject({ message: `key는 문자 타입이어야 합니다.` });
    }
  });
}
// saveStorage("name", albums);

export function loadStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(deserialize(storage.getItem(key))); // 키 값 가져오기
    } else {
      reject({ message: `key는 문자 타입이어야 합니다.` });
    }
  });
}

// loadStorage("name").then((result) => {
//   console.log(result);
// });

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    if (!key) {
      !key ? storage.clear() : storage.removeItem(key); // 조건에 맞춰 전부 클리어 하거나 키 지우기
      resolve();
    } else {
      reject({ message: `key는 문자 타입이어야 합니다.` });
    }
  });
}

// deleteStorage();
