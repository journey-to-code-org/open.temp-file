import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { createTempDir, createTempFile } from "../src/index.js";

test("creates and cleans temp dir",async()=>{const r=await createTempDir({prefix:"jt-"});await access(r.path);await r.cleanup();await assert.rejects(()=>access(r.path));});
test("creates temp file",async()=>{const r=await createTempFile({name:"a.txt",data:"x"});await access(r.path);await r.cleanup();});
