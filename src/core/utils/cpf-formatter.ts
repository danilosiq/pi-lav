export function cpfFormatter(data: string): string {
    const cleaned = data.replace(/\D/g, "").slice(0, 11);
  
    const part1 = cleaned.slice(0, 3);
    const part2 = cleaned.slice(3, 6);
    const part3 = cleaned.slice(6, 9);
    const part4 = cleaned.slice(9, 11);
  
    if (cleaned.length >= 10) {
      return `${part1}.${part2}.${part3}-${part4}`;
    } else if (cleaned.length >= 7) {
      return `${part1}.${part2}.${part3}`;
    } else if (cleaned.length >= 4) {
      return `${part1}.${part2}`;
    } else {
      return part1;
    }
  }