// import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";

// export const env = createEnv({
//   server: {
//     // SITE_URL: z.url(),
//     RESEND_API_KEY: z.string().min(1),
//   },
//   runtimeEnv: {
//     // SITE_URL: process.env.SITE_URL,
//     RESEND_API_KEY: process.env.RESEND_API_KEY,
//   },
// });

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1, "Missing RESEND_API_KEY"),
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  skipValidation:
    process.env.NODE_ENV === "production" && !process.env.RESEND_API_KEY,
});
