'use client';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
const ComingSoon = ({
  children,
  stack,
}: {
  children: React.ReactNode;
  stack: string[];
}) => {
  return (
    <>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            {stack && stack.length > 0 ? (
              stack.map((item) => <div key={item}>{item}</div>)
            ) : (
              <div className="text-small font-bold">COMING SOON!</div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ComingSoon;
