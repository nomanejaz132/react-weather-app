import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  convertUTCTimeToDay,
  getDayNameFromTimestamp,
} from "@/lib/dateTimeUtils";

export const TenDaysForecast = ({ data }) => {
  return (
    <Card className="h-fit shrink-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          Next 7 Days Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-base font-normal md:mb-1">
        {data?.map(
          (item, i) =>
            i !== 0 && (
              <div key={item?.dt}>
                <div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
                  <p className="min-w-[3rem] font-medium">
                    {i === 0
                      ? "Today"
                      : getDayNameFromTimestamp(item.dt).slice(0, 3)}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}.png`}
                    alt="weather icon"
                    className="h-10 w-10"
                  />
                  <div className="flex w-[60%] flex-row gap-2 overflow-hidden">
                    <div className="flex w-full select-none flex-row items-center justify-between gap-2 pr-2 text-sm">
                      <p className="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
                        {Math.floor(item?.temp?.min)}&deg;
                      </p>
                      {/* <TemperatureRange
                      min={minTemperature}
                      max={maxTemperature}
                      value={[item.temp.min, item.temp.max]}
                    /> */}
                      <p className="flex w-[3rem] min-w-fit justify-end">
                        {Math.floor(item?.temp?.max)}&deg;
                      </p>
                    </div>
                  </div>
                </div>
                {/* {i !== data.list.length - 1 && <Separator className="mt-3" />} */}
              </div>
            ),
        )}
      </CardContent>
    </Card>
  );
};
