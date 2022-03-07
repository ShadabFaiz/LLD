import { User } from '../user/user.interface';
import { Database } from './database.interface';

export interface DataStore {
  [key: User['userId']]: {
    loadTo: {
      [userId: User['userId']]: number;
    };
    debtTo: {
      [userId: User['userId']]: number;
    };
  };
}


export class UserDatabase implements Database {
  private _dataStore: DataStore = {};

  saveData(userId: User['userId'], data: DataStore[User['userId']]) {
    if (!this._dataStore) this._dataStore = {};
    this._dataStore[userId] = data;
    return true;
  }
  getData(userId?: User['userId']): DataStore | DataStore[User['userId']] {
    if (!userId) return this._dataStore;
    return this._dataStore[userId];
  }

  updateData(userId: User['userId'], data: DataStore[User['userId']]) {
    if (!this._dataStore[userId]) return this.saveData(userId, data);
    return true;
  }
}