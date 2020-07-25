
export type List = "object"|"string"|"undefined"|"boolean"|"number"|"bigint"|"symbol"|"function";

// export enum List {
//
//     "object" = "object",
//     "string" = "string",
//     "undefined" = "undefined",
//     "boolean" = "boolean",
//     "number" = "number",
//     "bigint" = "bigint",
//     "symbol" = "symbol",
//     "function" = "function"
// }


type Type<Type extends List> =
    Type extends "string" ? string :
    Type extends "object" ? object :
    Type extends "undefined" ? undefined :
    Type extends "boolean" ? boolean :
    Type extends "number" ? number :
    Type extends "bigint" ? bigint :
    Type extends "symbol" ? symbol :
    Type extends "function" ? ()=>any :
    never;

export default Type;
