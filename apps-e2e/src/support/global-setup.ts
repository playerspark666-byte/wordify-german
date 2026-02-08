import net from 'node:net';

declare global {

  var __TEARDOWN_MESSAGE__: string;
}

async function waitForPortOpen(
  port: number,
  host = 'localhost',
  timeoutMs = 30_000
): Promise<void> {
  const start = Date.now();

  return new Promise((resolve, reject) => {
    const tryConnect = () => {
      const socket = new net.Socket();

      socket
        .once('connect', () => {
          socket.destroy();
          resolve();
        })
        .once('error', () => {
          socket.destroy();

          if (Date.now() - start > timeoutMs) {
            reject(
              new Error(`Timeout waiting for ${host}:${port} to become available`)
            );
          } else {
            setTimeout(tryConnect, 300);
          }
        })
        .connect(port, host);
    };

    tryConnect();
  });
}

module.exports = async function () {
  console.log('\nSetting up...\n');

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  await waitForPortOpen(port, host);

  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
