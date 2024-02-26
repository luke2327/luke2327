import useCurrentLanguage from '@/lib/useCurrentLanguage';
import useCurrentPath from '@/lib/useCurrentPath';
import clsx from 'clsx';
import Link from 'next/link';
import { Languages } from 'lucide-react';
import { useRef, useState } from 'react';
import { ArrowContainer, Popover } from 'react-tiny-popover';

export default function LanguageSelect() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const clickMeButtonRef = useRef<HTMLButtonElement>(null);
  const currentLanguage = useCurrentLanguage();
  const currentPath = useCurrentPath();

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom']}
      padding={10}
      onClickOutside={() => setIsPopoverOpen(false)}
      ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={'#ffffff'}
          arrowSize={10}
          arrowStyle={{ opacity: 0 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
          style={{
            borderRadius: 4,
          }}
        >
          <div
            style={{
              backgroundColor: 'transparent',
              opacity: 0.7,
              textAlign: 'center',
              display: 'flex',
              gap: 4,
              flexDirection: 'column',
            }}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <Link href={'/' + currentPath} className={clsx("hover:text-[#fff]", currentLanguage === 'en' ? 'text-[#fff]' : '')}>English</Link>
            <Link href={'/ja/' + currentPath} className={clsx("hover:text-[#fff]", currentLanguage === 'ja' ? 'text-[#fff]' : '')}>日本語</Link>
            <Link href={'/ko/' + currentPath} className={clsx("hover:text-[#fff]", currentLanguage === 'ko' ? 'text-[#fff]' : '')}>한국어</Link>
          </div>
        </ArrowContainer>
      )}
    >
      <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        <Languages strokeWidth={1.5} />
      </button>
    </Popover>
  );
}
