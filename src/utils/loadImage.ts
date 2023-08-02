export const loadImage = async (src: string) =>
  await new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve(src);
    };
    img.onerror = (e) => {
      reject(e);
    };
  });
