import { useRouter } from 'next/router';

export default function useCurrentPath(): string {
  const router = useRouter();
  const [, ...path] = router.pathname.split('/');

  if (['en', 'ja'].includes(path[0])) {
    path.shift();
  }

  return path.join('/');
}
