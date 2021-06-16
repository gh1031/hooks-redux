import Koa from 'koa';
import fs from 'fs';
const orderList = JSON.parse(
  await fs.readFileSync(new URL("./src/data/order.json", import.meta.url))
);

const app = new Koa();

app.use(async (ctx) => {
  const path = ctx.req.url;
  console.log("request url:", path);
  if (path === '/json') {
    ctx.body = orderList;
    return;
  }
  ctx.body = `current request url: ${ctx.req.url}`
});

app.listen(3001, () => {
  console.log('server runing on http://localhost:3001')
})
