export class Player {
  private name: string

  constructor(name: string) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }
}