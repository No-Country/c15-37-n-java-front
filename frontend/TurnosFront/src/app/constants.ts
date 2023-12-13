export const CONNECTIONS = {
  BASE_PATH: "https://reqres.in/api/",
  //BASE_PATH: "http://localhost:8080",//
  AUTH_API: "/login",
  USER_DATA_RECOVER: "/users",
  USER_NAME_VERIFIER: "/users/exist",
  DATA_API: "/persona/1",
  ICONS: "/icons",
  IMAGES: "/images",
  SOCIAL_MEDIA: "/social",
  SECCIONES: "/seccion",
  USER_LIST: "/users",
  ELEMENTOS: "/elemento",
  START_SERVICE:"/health",
  DELAY_TIME: 30000, // MILISECS
  MAX_RETRIES : 4 // RETRIES TO CONNECT
} as const;

