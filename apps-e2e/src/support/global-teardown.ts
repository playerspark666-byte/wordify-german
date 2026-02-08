import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

async function killPort(port: number): Promise<void> {
  try {
    if (process.platform === 'win32') {
      await execAsync(
        `for /f "tokens=5" %a in ('netstat -aon ^| find ":${port}" ^| find "LISTEN"') do taskkill /f /pid %a`
      );
    } else {
      await execAsync(`lsof -ti tcp:${port} | xargs kill -9`);
    }
  } catch {
    // Port already free — this is fine
  }
}

module.exports = async function () {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  await killPort(port);

  if (globalThis.__TEARDOWN_MESSAGE__) {
    console.log(globalThis.__TEARDOWN_MESSAGE__);
  }
};
