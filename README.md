# bupt-auth

## 这是一个用于直接调用BUPT统一登录认证包的源代码，本包已经发布在JSR上

您可以选择您熟悉的包管理器(支持Deno pnpm npm Yarn Bun)下载并管理这一依赖，在实际使用中，您不用下载这个源代码，本项目仅用于测试和查看原理。

在您集成本程序的过程中，仅需要调用本包已经提供的login方法，具体示例见下。

程序包发布界面参见 [jsr.io/@byrdocs/bupt-auth](https://jsr.io/@byrdocs/bupt-auth)。

## 如果您还是想把这个源代码跑起来看看它是怎么工作的

请确保您的电脑有Node.js环境

```
//下载bun（Windows环境，其他环境自行查找命令）
powershell -c "irm bun.sh/install.ps1|iex"
//设置环境变量路径为bun.exe的安装路径（写到bin）,如不生效，尝试重启电脑
//通过bun下载本程序需要的依赖
bun install
//愉快地进行测试
bun run example.ts
```

## 在您的前端中集成的示例：

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
        // 携带 cookie 获取验证码图片，然后输入验证码
        const captcha = await input("Captcha: ");
        const res: UserInfo = await e.resolve(captcha);
        console.log(res)
    } else {
        throw e;
    }
}
```
