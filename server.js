import Koa from 'koa';
import fs from 'fs';
// const orderList = JSON.parse(
//   await fs.readFileSync(new URL("./src/data/order.json", import.meta.url))
// );

const app = new Koa();

const resolveBody = req => new Promise(r => {
  console.log(req, 'req')
  let chunkData = "";
  req.on("data", function (chunk) {
    chunkData += chunk;
  });
  req.on("end", function () {
    r(JSON.parse(chunkData || "{}"));
  }); 
})
const bodyPaserMiddleware = async (ctx, next) => {
  console.log(ctx);
  const data = await resolveBody(ctx.req);
  ctx.data = data;
  await next();
}

const loginMiddleware = async (ctx, next) => {
  const { path, data } = ctx;
  if (path === '/login') {
    ctx.body = data;
  } else {
    await next();
  }
    
}

app.use(bodyPaserMiddleware)
app.use(loginMiddleware);

app.use(async (ctx) => {
  const { path } = ctx;
  console.log("request url:", path);
  ctx.body = `current request url: ${ctx.req.url}`
});

app.listen(3001, () => {
  console.log('server runing on http://localhost:3001')
})
