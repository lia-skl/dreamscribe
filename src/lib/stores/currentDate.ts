import { readable } from 'svelte/store';
import { formatTimestamp } from '$lib/scripts/timestamp';

export const currentDate = readable<string>(formatTimestamp(Date.now()));