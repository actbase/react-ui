function getSize(defaultSize: number, size: number): number {
  return size * (defaultSize / 10);
}

export default getSize;
