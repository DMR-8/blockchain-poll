export interface Poll extends PollForm {
  id: number; //12
  question: string; //Eg. Which days of the week you like the most?
  results: number[]; // [0,0,0,0,5,7,2]
  voted: boolean;
}

export interface PollForm {
  question: string;
  options: string[]; //["Monday", "Tuesday", "Wednesday".....]
  thumbnail: string; // Link to some image
}

export interface PollVote {
  id: number;
  vote: number;
}
export interface Voter {
  id: string; //0xAOJFOPAJ1234F
  voted: number[]; //[ 12, 13] questions answered
}
