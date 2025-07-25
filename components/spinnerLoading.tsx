import { Spinner } from "@heroui/spinner";

interface Props {
  isLoading: boolean;
  isTextTop?: boolean;
  isTextSpinner?: boolean;
  isTextBottom?: boolean;
  notSpinner?: boolean;
  labelTop?: string;
  labelSpinner?: string;
  labelBottom?: string;
  topTextTop?: string;
  topSpinner?: string;
  topTextBottom?: string;
}
export const SpinnerLoading = ({
  isLoading = false,
  isTextTop = false,
  isTextSpinner = false,
  isTextBottom = false,
  notSpinner = false,
  labelTop,
  labelSpinner,
  labelBottom,
  topTextTop = "top-[15%]",
  topSpinner = "top-[50%]",
  topTextBottom = "top-[65%]",
}: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <>
      {isTextTop && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${topTextTop}`}
        >
          <span className="text-2xl font-semibold text-default-900 bg-white dark:bg-black rounded-sm min-w-[1000px] text-center">
            {labelTop}
          </span>
        </div>
      )}
      {!notSpinner && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${topSpinner}`}
        >
          <Spinner
            classNames={{
              label:
                "text-2xl font-semibold text-default-900 bg-white dark:bg-black rounded-sm min-w-[1000px] text-center",
            }}
            color="success"
            label={(isTextSpinner && labelSpinner) || undefined}
            size="lg"
            variant="simple"
          />
        </div>
      )}
      {isTextBottom && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${topTextBottom}`}
        >
          <span className="text-2xl font-semibold text-default-900 bg-white dark:bg-black rounded-sm min-w-[1000px] text-center">
            {labelBottom}
          </span>
        </div>
      )}
    </>
  );
};
