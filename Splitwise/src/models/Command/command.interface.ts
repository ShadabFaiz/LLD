export interface Command {
  
  isApplicable: (command: string) => boolean;
  run: (command: string) => void;
}