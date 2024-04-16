type EnvObject = {
  apiBaseUrl: string;
};

export const envObject: EnvObject = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "",
};
