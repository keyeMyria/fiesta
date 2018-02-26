var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import * as React from "react";
import { AsyncStorage, NetInfo } from "react-native";
export default class TqanzCache extends React.Component {
  constructor(props) {
    super(props);
    if (TqanzCache._instance) {
      throw new Error(
        "Error: Instantiation failed: Use TqanzCache.getInstance() instead of new."
      );
    }
    TqanzCache._instance = this;
  }
  init() {
    return __awaiter(this, void 0, void 0, function*() {
      if (!this._isOnline && this._hasCacheLayer) return yield "cache layer";
      else if (!this._isOnline && !this._hasCacheLayer)
        return yield "Model Popup No Data";
      else if (this._isOnline && this._hasCacheLayer) {
        // Check date of cache
        if ("i" == "i") return yield "cache layer";
        else return yield "Do SOQL, set cache date and set cache"; // do soql,set cache date and set cache
      }
      return yield AsyncStorage.setItem("@fiesta:date", Date.now().toString());
    });
  }
  static getInstance() {
    return TqanzCache._instance;
  }
  netInfo() {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        "Initial, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
    });
    function handleFirstConnectivityChange(connectionInfo) {
      console.log(
        "First change, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
      NetInfo.removeEventListener(
        "connectionChange",
        handleFirstConnectivityChange
      );
    }
    NetInfo.addEventListener("connectionChange", handleFirstConnectivityChange);
  }
  isOnline() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        return (this._isOnline = true);
      }
      return (this._isOnline = false);
    });
    return (this._isOnline = false);
  }
  set(key, value, callback) {
    return __awaiter(this, void 0, void 0, function*() {
      try {
        this._hasCacheLayer = true;
        yield AsyncStorage.setItem(key, value, callback);
      } catch (error) {
        // Error saving data
      }
    });
  }
  get(key, callback) {
    return __awaiter(this, void 0, void 0, function*() {
      try {
        const value = yield AsyncStorage.getItem(key, callback);
        if (value !== null) {
          return value;
        }
      } catch (error) {
        // Error retrieving data
      }
    });
  }
  forceUpdate() {
    return __awaiter(this, void 0, void 0, function*() {});
  }
}
//var scoreManager = SingletonClass.getInstance();
TqanzCache._instance = new TqanzCache();
//# sourceMappingURL=index.js.map
