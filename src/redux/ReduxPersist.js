import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: "rahasia",
  onError: function (error) {
    console.error("REDUX_PERSIST -> encryptor: ", error);
  },
});

const REDUX_PERSIST = {
  active: true,
  reducerVersion: "1.0",
  storeConfig: {
    key: "aplication",
    storage,
    whitelist: ["auth"],
    // transforms: [encryptor],
  },
};

export default REDUX_PERSIST;
