# bupt-auth

## 安装

见 [jsr.io/@byrdocs/bupt-auth](https://jsr.io/@byrdocs/bupt-auth)。

## 使用

```ts
import { login, CaptchaError, type UserInfo } from "@byrdocs/bupt-auth";

try {
    const res: UserInfo = await login(bupt_id, bupt_pass);
    console.log(res)
} catch (e) {
    if (e instanceof CaptchaError) {
        // 如果需要验证码
        console.log("Captchas required. ")
        console.log("\tCaptcha URL: ", e.captcha());
        console.log("\tCookie:", e.cookie())
        const captcha = await input("Captcha: ");
        const res: UserInfo = await e.resolve(captcha);
        console.log(res)
    } else {
        throw e;
    }
}
```