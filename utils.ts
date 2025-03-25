export async function input(message?: string): Promise<string> {
  if (message) process.stdout.write(message);
  for await (const line of console) {
    return line.trim();
  }
  return '';
}

export async function getTestAccount() {
  if (!process.env.BUPT_ID || !process.env.BUPT_PASS) {
    console.warn("Environment variables BUPT_ID and BUPT_PASS are not set");
    const bupt_id = await input("BUPT ID: ");
    const bupt_pass = await input("BUPT Password: ");
    process.env.BUPT_ID = bupt_id;
    process.env.BUPT_PASS = bupt_pass
  }
  return { bupt_id: process.env.BUPT_ID, bupt_pass: process.env.BUPT_PASS };
}