# bupt-auth

```ts
import { login, CaptchaError, type UserInfo } from "@byrdocs/bupt-auth";

try {
    const res: UserInfo = await login(bupt_id, bupt_pass);
    console.log(res)
} catch (e) {
    if (e instanceof CaptchaError) {
        // 如果需要验证码
        console.log("Captchas required. Captcha URL: ", e.captcha());
        const captcha = await input("Captcha: ");
        const res: UserInfo = await e.resolve(captcha);
        console.log(res)
    } else {
        throw e;
    }
}
```