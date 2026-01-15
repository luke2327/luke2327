import dayjs from 'dayjs';

export default function Footer() {
  return (
    <footer className="flex justify-center px-2 pb-8 text-xs xs:text-sm">
      <p>
        Copyright(C) 2023 - {dayjs().year()} maplew.com All Rights Reserved.
      </p>
    </footer>
  );
}
