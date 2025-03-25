import { login, CaptchaError, type UserInfo } from ".";
import { getTestAccount, input } from "./utils";

const { bupt_id, bupt_pass } = await getTestAccount();

async function login_auth(): Promise<UserInfo> {
    try {
        const res = await login(bupt_id, bupt_pass);
        return res;
    } catch (e) {
        if (e instanceof CaptchaError) {
            console.log("Captchas required. Captcha URL: ", e.captcha());
            const captcha = await input("Captcha: ");
            const res = await e.resolve(captcha);
            return res;
        } else {
            throw e;
        }
    }
}

console.log(await login_auth());