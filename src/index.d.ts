export interface TempResource { path:string; cleanup():Promise<void>; }
export interface TempFileResource extends TempResource { directory:string; }
export function createTempDir(options?:{prefix?:string;directory?:string}):Promise<TempResource>;
export function createTempFile(options?:{prefix?:string;directory?:string;name?:string;data?:string|Buffer|Uint8Array}):Promise<TempFileResource>;

