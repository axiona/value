import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
export default function ValueParameters(value: unknown, message?: Dynamic<unknown, string>, error?: (message: string) => Error): Error;
