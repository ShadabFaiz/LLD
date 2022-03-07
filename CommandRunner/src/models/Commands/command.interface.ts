export interface ICommand {
  getName: () => string;
  execute: () => void
}