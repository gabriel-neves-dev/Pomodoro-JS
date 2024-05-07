export function secondsToMinutes(seconds: number): string {
    const zeroLeft = (n: number) => Math.floor(n);
    
    const min = zeroLeft((seconds / 60) % 60).toString().padStart(2, '0');
    const sec = zeroLeft((seconds % 60) % 60).toString().padStart(2, '0');
    return `${min}:${sec}`
}