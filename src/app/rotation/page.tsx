'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import PageComponents from './PageComponents';

export default function RotationPage() {
  const [queryClient] = useState(() => new QueryClient());

  // 이거 구분지어야 합니둥 ㅇㅅㅇ. 여튼 그렇다구요 ㅇㅅㅇ..
  return (
    <QueryClientProvider client={queryClient}>
    <PageComponents />
    </QueryClientProvider>
  );
}