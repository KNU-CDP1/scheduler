import axios, { isAxiosError } from "axios";
import { config } from "../config/config";
import { SetStateAction } from "react";
import { createToaster } from "@chakra-ui/react";

export const getScheduleHistory = async (setHistory: React.Dispatch<SetStateAction<ScheduleHistory[]>>) => {
  try {
    const resp = await axios.get(config.baseurl + "/api/scheduleHistory");
    const respData: ScheduleHistoryApiResponse[] = resp.data;
    const data: ScheduleHistory[] = [];

    for (const scheduleHistory of respData) {
      data.push({
        ...scheduleHistory,
        uploadDate: new Date(scheduleHistory.uploadDate),
      });
    }

    setHistory(data);
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
