import { createEmotionCache } from '@mantine/core';

const emotionCache = createEmotionCache({
  key: 'mantine',
  prepend: true,
});

export default emotionCache;
