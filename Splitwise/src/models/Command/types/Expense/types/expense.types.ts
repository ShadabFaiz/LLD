export interface Expense {
  process: (command: string) => void;
  isApplicable: (command: string) => boolean;
}