/*================================================================================================*/
// api props

/*================================================================================================*/
// component props

/*================================================================================================*/
// data
interface DashBoard {
  flight: string;
  passengers: number;
  seats: number;
  cost: number;
  //   departure: Date;
  //   arrival: Date;
  departure: string;
  arrival: string;
  weather: string; // ? fix
  risk: number;
  status: "Completed" | "In Flight" | "Delayed" | "Cancelled" | "Scheduled";
}

interface UploadHistory {
  title: string;
  author: string;
  // uploadDate: Date;
  uploadDate: string;
  details: string;
  csv: string;
}
