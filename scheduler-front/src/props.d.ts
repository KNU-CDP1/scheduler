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
  status: "Completed" | "InFlight" | "Delayed" | "Cancelled";
}
