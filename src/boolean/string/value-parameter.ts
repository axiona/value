import Value from "../../value";
import Validatable from "@dikac/t-validatable/validatable";
import ValueParameters from "./value-parameters";

export default function ValueParameter(
    // value : unknown,
    // valid : boolean,
    {
        value,
        valid,
    } : Value<unknown> & Validatable
) : string {

    return ValueParameters(value, valid);
}