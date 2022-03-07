export class User {
   private _id: string

  constructor(userId: string) {
   this._id = userId;
  }

  get userId() {
    return this._id;
  }
 
}