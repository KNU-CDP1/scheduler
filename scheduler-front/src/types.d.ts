// response
interface ScheduleApiResponse {
  passengers: number;
  adjustedDeparture: string;
  weather: string;
  plannedDeparture: string;
  plannedArrival: string;
  id: number;
  seats: number;
  adjustedArrival: string;
  flightNumber: string;
  risk: number;
  status: "Completed" | "In Flight" | "Delayed" | "Cancelled" | "Scheduled";
}

interface ScheduleHistoryApiResponse {
  title: string;
  csv: string;
  details: string;
  author: string;
  uploadDate: string;
}
/*================================================================================================*/
// component props
interface DashBoardTableProps {
  schedules: Schedule[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FileUploadButtonProps {
  handleFiles: (f: File[]) => void;
}

/*================================================================================================*/
// data
interface Schedule {
  id: number;
  flightNumber: string;
  passengers: number;
  seats: number;
  cost: number;
  plannedDeparture: Date;
  plannedArrival: Date;
  adjustedDeparture: Date;
  adjustedArrival: Date;
  weather: string;
  risk: number;
  status: "Completed" | "In Flight" | "Delayed" | "Cancelled" | "Scheduled";
}
interface ScheduleHistory {
  title: string;
  author: string;
  uploadDate: Date;
  details: string;
  csv: string;
}

interface ScheduleParams {
  delayCost: number;
  cancelCost: number;
  riskAlpha: number;
}
