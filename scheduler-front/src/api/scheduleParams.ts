import axios, { isAxiosError } from "axios";
import { config } from "../config/config";
import { SetStateAction } from "react";
import { createToaster } from "@chakra-ui/react";

export const getScheduleParams = async (setScheduleParams: React.Dispatch<SetStateAction<ScheduleParams>>) => {
  try {
    const resp = await axios.get(config.baseurl + "/api/scheduleParam/settings");
    const data: ScheduleParams = {
      ...resp.data,
      time: new Date(resp.data.time),
    };
    setScheduleParams(data);
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
    const body: ScheduleParamsApiRequest = {
      ...scheduleParam,
      time: scheduleParam.time.toISOString(),
    };

    const resp = await axios.patch(config.baseurl + "/api/scheduleParam", body);
    const data: ScheduleParams = {
      ...resp.data,
      riskAlpha: resp.data.riskAlpha / 1000,
      time: new Date(resp.data.time),
    };
    setScheduleParams(data);
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
