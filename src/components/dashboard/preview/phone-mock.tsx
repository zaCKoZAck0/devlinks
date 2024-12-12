export function PhoneMock({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex items-center justify-center relative">
      <svg
        width="286"
        height="612"
        viewBox="0 0 286 612"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[500px] w-auto"
      >
        <path
          d="M1 45.5C1 20.9233 20.9233 1 45.5 1H69.5C75.8513 1 81 6.14873 81 12.5C81 20.5081 87.4919 27 95.5 27H190.5C198.508 27 205 20.5081 205 12.5C205 6.14873 210.149 1 216.5 1H240.5C265.077 1 285 20.9233 285 45.5V566.5C285 591.077 265.077 611 240.5 611H45.5C20.9233 611 1 591.077 1 566.5V45.5Z"
          fill="white"
          stroke="#737373"
        />
      </svg>
      <svg
        width="308"
        height="632"
        viewBox="0 0 308 632"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-[512px] w-auto"
      >
        <path
          d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
          stroke="#737373"
        />
      </svg>
      <div className="absolute">{children}</div>
    </div>
  );
}
