import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export async function createTempDir(options = {}) {
  const prefix = options.prefix ?? "open-";
  const directory = await mkdtemp(path.join(options.directory ?? tmpdir(), prefix));
  return {
    path: directory,
    cleanup: () => rm(directory,{recursive:true,force:true})
  };
}

export async function createTempFile(options = {}) {
  const dir = await createTempDir(options);
  const name = options.name ?? "temp";
  const filePath = path.join(dir.path,name);
  await writeFile(filePath, options.data ?? "");
  return {
    path: filePath,
    directory: dir.path,
    cleanup: dir.cleanup
  };
}
