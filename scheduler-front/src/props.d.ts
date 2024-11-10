/*================================================================================================*/
// api props

/*================================================================================================*/
// component props
interface FlightDataType {
  flight: string;
  passengers: number;
  seats: number;
  cost: number;
  departure: string;
  arrival: string;
  weather: string;
  risk: number;
  status: "Completed" | "In Flight" | "Delayed" | "Cancelled" | "Scheduled";
}

// Define the props for DTable
interface DTableProps {
  flightData: FlightDataType[]; // DTable expects an array of FlightDataType
}

/*================================================================================================*/
// data
