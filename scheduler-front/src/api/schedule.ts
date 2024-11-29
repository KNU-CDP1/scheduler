import axios, { isAxiosError } from "axios";
import { config } from "../config/config";
import { SetStateAction } from "react";
import { createToaster } from "@chakra-ui/react";

export const getSchedule = async (setSchedule: React.Dispatch<SetStateAction<Schedule[]>>) => {
  try {
    const resp = await axios.get(config.baseurl + "/api/schedule");
    const respData: ScheduleApiResponse[] = resp.data;
    const data: Schedule[] = [];
    for (const schedule of respData) {
      data.push({
        id: schedule.id,
        flightNumber: schedule.flightNumber,
        passengers: schedule.passengers,
        seats: schedule.seats,
        cost: schedule.seats * schedule.passengers,
        plannedArrival: new Date(schedule.plannedArrival),
        plannedDeparture: new Date(schedule.plannedDeparture),
        adjustedArrival: new Date(schedule.adjustedArrival),
        adjustedDeparture: new Date(schedule.adjustedDeparture),
        weather: schedule.weather,
        risk: schedule.risk,
        status: schedule.status,
      });
    }

    setSchedule(data);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        if (400 <= error.response.status && error.response.status < 500) {
          createToaster({
            placement: "bottom",
            overlap: true,
            gap: 10,
            title: error.response.statusText,
          });
        }
      } else if (error.request) console.log(error.request);
    }
  }
};

export const uploadSchedule = async (title: string, details: string, csvFile: File) => {
  try {
    const data = new FormData();
    data.append("title", title);
    data.append("file", csvFile);
    data.append("details", details);

    await axios.post(config.baseurl + "/api/schedule", data);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        if (400 <= error.response.status && error.response.status < 500) {
          createToaster({
            placement: "bottom",
            overlap: true,
            gap: 10,
            title: error.response.statusText,
          });
        }
      } else if (error.request) console.log(error.request);
    }
  }
};
