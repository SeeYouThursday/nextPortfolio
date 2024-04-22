'use client';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
const ComingSoon = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">COMING SOON!</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ComingSoon;
