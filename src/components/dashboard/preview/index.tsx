import { PhoneMock } from "./phone-mock";

export function Preview() {
  return (
    <div className="bg-card rounded-md h-full w-full max-w-lg hidden lg:block ">
      <div className="h-fit w-full p-10 sticky top-4 left-0">
        <PhoneMock>
          <div className="h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
                <div className="w-16 h-3 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4"></div>
          </div>
        </PhoneMock>
      </div>
    </div>
  );
}
