export const optimizeCloudinary = (url, options = {}) => {
  if (!url || !url.includes("res.cloudinary.com")) return url;

  const {
    width = 800,
    quality = "auto",
    format = "auto",
  } = options;

  return url.replace(
    "/upload/",
    `/upload/w_${width},f_${format},q_${quality}/`
  );
};
