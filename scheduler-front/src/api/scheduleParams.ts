import axios, { isAxiosError } from "axios";
import { config } from "../config/config";
import { SetStateAction } from "react";
import { createToaster } from "@chakra-ui/react";

export const getScheduleParams = async (setScheduleParams: React.Dispatch<SetStateAction<ScheduleParams>>) => {
  try {
    const resp = await axios.get(config.baseurl + "/api/scheduleParam");
    setScheduleParams(resp.data);
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

export const updateScheduleParams = async (
  scheduleParam: ScheduleParams,
  setScheduleParams: React.Dispatch<SetStateAction<ScheduleParams>>,
) => {
  try {
    const resp = await axios.patch(config.baseurl + "/api/scheduleParam", scheduleParam);
    setScheduleParams(resp.data);
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
